import {
  StyledPursuitsButtons,
  StyledPursuitsForm,
  StyledStar,
  StyledContainerForm,
  StyledPursuitsSubTitle,
  StyledItemsForm,
} from './pursuits-form.styles';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  DatePickerComponent,
  Dropdown,
  GenericInput,
  TextArea,
} from '@delia/ui-shared';
import {
  Account,
  ContractType,
  Project,
  ProjectsState,
  ProjectsStatus,
  PursuitsStatus,
} from '@delia/frontend/core';
import { useEffect, useState } from 'react';
import {
  getDropdownOptionsFromStringsArray,
  setFormProject,
} from './pursuits-form-logic';

type Mode = 'create' | 'edit';
export interface PursuitsFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  formMode: Mode;
  accounts: Account[];
  projectTypeStatusRelation: { Pursuit: string[]; Project: string[] };
  onSubmit: (data: any) => void;
  onProjectNameChange: (name: string) => void;
  projectsState: ProjectsState;
  defaultProject?: Project;
  setIsDirty: (isDirty: boolean) => void;
}

export function PursuitsForm({
  handleSave,
  handleCancel,
  formMode,
  accounts,
  projectTypeStatusRelation,
  onSubmit,
  onProjectNameChange,
  projectsState,
  defaultProject,
  setIsDirty,
}: PursuitsFormProps) {
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors, isDirty },
    resetField,
    reset,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      account: undefined,
      status: undefined,
      portfolio: undefined,
      buOwner: undefined,
      gmPercentage: undefined,
      totalSOW: undefined,
      contractType: undefined,
      pursuitName: undefined,
      usaPointOfContact: undefined,
      pursuitStartDate: undefined,
      responsibleFromLatam: undefined,
      pursuitType: { label: 'Pursuit', value: 'Pursuit' },
      pursuitEndDate: undefined,
      additionalBackground: undefined,
      onboardingProcess: undefined,
      servicesScope: undefined,
      levelOfAccount: undefined,
    },
  });

  const [projectStatusOptions, setProjectStatusOptions] = useState<string[]>(
    []
  );
  const [isProjectNameUsed, setIsProjectNameUsed] = useState(false);
  const [startMaxDate, setStartMaxDate] = useState<Date>();
  const [endMinDate, setEndMinDate] = useState<Date>();

  useEffect(() => {
    switch (projectsState.kind) {
      case 'LoadedProjectState':
        setIsProjectNameUsed(true);
        break;
      case 'ErrorLoadProjectState':
        setIsProjectNameUsed(false);
        break;
    }
    defaultProject &&
      setFormProject(reset, defaultProject, projectTypeStatusRelation);
  }, [projectsState]);

  useEffect(() => {
    setIsDirty(isDirty);
  }, [isDirty]);

  useEffect(() => {
    handleProjectTypeChange('Pursuit');
  }, []);

  const projectTypes = ['Pursuit', 'Project'];

  const handleProjectTypeChange = (projectType: 'Pursuit' | 'Project') => {
    const defaultValue =
      projectType === 'Project'
        ? ProjectsStatus.EXECUTION
        : PursuitsStatus.OPEN;
    setProjectStatusOptions(projectTypeStatusRelation[projectType]);
    resetField('status', {
      defaultValue: { label: defaultValue, value: defaultValue },
    });
  };

  const handleAccountDropdownChange = (account: Account) => {
    resetField('buOwner', {
      defaultValue: account.buOwner?.name || 'Account without Bu Owner',
    });
    resetField('portfolio', {
      defaultValue: account.portfolio?.name || 'Account without Portfolio',
    });
  };

  const handleProjectNameChange = (name: string) => {
    onProjectNameChange(name);
  };

  const handleStartDateChange = (date: Date) => {
    setEndMinDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setStartMaxDate(date);
  };

  return (
    <StyledPursuitsForm onSubmit={handleSubmit(onSubmit)}>
      <StyledPursuitsSubTitle>
        BU & Financial Information
      </StyledPursuitsSubTitle>
      <StyledContainerForm>
        <label>
          Account Name<StyledStar>*</StyledStar>
          <Controller
            control={control}
            {...register('account', {
              onChange: (event) =>
                handleAccountDropdownChange(event.target.value.value),
            })}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={accounts.map((account) => {
                  return { label: account.name, value: account };
                })}
                placeholder="Account Name"
              />
            )}
          />
        </label>
        <label>
          Primary Sales BU
          <Controller
            control={control}
            {...register('buOwner')}
            render={({ field }) => (
              <GenericInput {...field} placeholder="BU Owner" disabled />
            )}
          />
        </label>
        <label>
          Portfolio
          <Controller
            control={control}
            {...register('portfolio')}
            render={({ field }) => (
              <GenericInput {...field} placeholder="Porfolio" disabled />
            )}
          />
        </label>
        <label>
          GM Percentage
          <Controller
            name="gmPercentage"
            control={control}
            render={({ field }) => (
              <GenericInput
                type={'number'}
                {...field}
                placeholder="Type GM Percentage in Number"
              />
            )}
          />
        </label>
        <label>
          Total SOW
          <Controller
            name="totalSOW"
            control={control}
            render={({ field }) => (
              <GenericInput
                {...field}
                placeholder="Type SOW in numbers"
                type="number"
              />
            )}
          />
        </label>

        <label>
          Contract Type
          <Controller
            name="contractType"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={getDropdownOptionsFromStringsArray(
                  Object.values(ContractType)
                )}
                placeholder="Select a Type"
              />
            )}
          />
        </label>
      </StyledContainerForm>
      <StyledPursuitsSubTitle>Pursuit Data</StyledPursuitsSubTitle>
      <StyledContainerForm>
        <label>
          Pursuit Name<StyledStar>*</StyledStar>
          <Controller
            control={control}
            {...register('pursuitName', {
              required: true,
              onChange: (event) => handleProjectNameChange(event.target.value),
            })}
            render={({ field }) => (
              <GenericInput
                {...field}
                disabled={formMode === 'edit'}
                placeholder="Pursuit Name"
                error={isProjectNameUsed}
                errorMessage={'This name is already at use'}
              />
            )}
          />
        </label>
        <label>
          USA Point Of Contact<StyledStar>*</StyledStar>
          <Controller
            control={control}
            {...register('usaPointOfContact', { required: true })}
            render={({ field }) => (
              <GenericInput
                {...field}
                placeholder="Type a Contact"
                error={!!errors['usaPointOfContact']}
                errorMessage={'Usa Point Of Contact must not be empty'}
              />
            )}
          />
        </label>
        <label>
          Pursuit Start Date
          <Controller
            control={control}
            {...register('pursuitStartDate', {
              onChange: (event) => handleStartDateChange(event.target.value),
            })}
            render={({ field: { value, ...fieldProps } }) => {
              return (
                <DatePickerComponent
                  {...fieldProps}
                  selected={value}
                  maxDate={startMaxDate}
                />
              );
            }}
          />
        </label>
        <label>
          Responsible From Latam<StyledStar>*</StyledStar>
          <Controller
            control={control}
            {...register('responsibleFromLatam', { required: true })}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={[]}
                placeholder="Type Responsible from latam"
                isCreatable
                isMulti
                error={!!errors['responsibleFromLatam']}
              />
            )}
          />
        </label>
        <StyledItemsForm>
          <label>
            Type
            <Controller
              control={control}
              {...register('pursuitType', {
                onChange: (event) =>
                  handleProjectTypeChange(event.target.value.label),
              })}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={getDropdownOptionsFromStringsArray(projectTypes)}
                  placeholder="Pursuit"
                />
              )}
            />
          </label>
          <label>
            Status
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={getDropdownOptionsFromStringsArray(
                    projectStatusOptions
                  )}
                  placeholder="Select a Status"
                />
              )}
            />
          </label>
        </StyledItemsForm>
        <label>
          Pursuit End Date
          <Controller
            control={control}
            {...register('pursuitEndDate', {
              onChange: (event) => handleEndDateChange(event.target.value),
            })}
            render={({ field: { value, onChange, ...fieldProps } }) => {
              return (
                <DatePickerComponent
                  {...fieldProps}
                  selected={value}
                  onChange={onChange}
                  minDate={endMinDate}
                />
              );
            }}
          />
        </label>
        <label>
          Are there any security procedures, additional background checks, or
          similar?
          <Controller
            name="additionalBackground"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nibh quis eros fermentum semper."
              />
            )}
          />
        </label>
        <label>
          What's the onboarding process, tools, and timing to staff people to
          the team? (i.e. licenses, permissions, training, VPN, access, etc).
          <Controller
            name="onboardingProcess"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nibh quis eros fermentum semper."
              />
            )}
          />
        </label>
        <label>
          Scope of the services
          <Controller
            name="servicesScope"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nibh quis eros fermentum semper."
              />
            )}
          />
        </label>
        <label>
          Level of account uncertainty
          <Controller
            name="levelOfAccount"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nibh quis eros fermentum semper."
              />
            )}
          />
        </label>
      </StyledContainerForm>
      <StyledPursuitsButtons>
        <Button
          text="Cancel"
          variant="secondary"
          onClick={handleCancel}
          disabled={!isDirty}
        />
        <Button
          text={'Save'}
          variant="primary"
          type="submit"
          disabled={!isValid || isProjectNameUsed || !isDirty}
        />
      </StyledPursuitsButtons>
    </StyledPursuitsForm>
  );
}

export default PursuitsForm;
