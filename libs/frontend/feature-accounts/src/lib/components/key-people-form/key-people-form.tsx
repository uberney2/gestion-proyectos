import {
  StyledAccountsButtons,
  StyledAccountsForm,
  StyledStar,
} from './key-people-form.styles';
import { Controller, useForm } from 'react-hook-form';
import { Button, Dropdown, GenericInput, TextArea } from '@delia/ui-shared';
import { useEffect } from 'react';
import { AccountKeyPeopleState, KeyPeopleState } from '@delia/frontend/core';
import { getDropdownOptions } from './key-people-form-logic';

export interface KeyPeopleFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  keyPeopleState: KeyPeopleState;
  accountKeyPeopleState: AccountKeyPeopleState;
  formMode?: 'create' | 'edit';
  onSubmit: (data: any) => void;
  isOnlyBindingKeyPeople: boolean;
  onDropdownChange: ({ label, value }: { label: string; value: any }) => void;
  defaultData?: any;
  dataReset?: any;
}

export function KeyPeopleForm({
  handleSave,
  handleCancel,
  keyPeopleState,
  accountKeyPeopleState,
  formMode = 'create',
  onSubmit,
  isOnlyBindingKeyPeople,
  onDropdownChange,
  defaultData,
}: KeyPeopleFormProps) {
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
    reset,
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    defaultData && reset(defaultData);
  }, [defaultData]);

  const handleDropdownChange = (option: { label: string; value: any }) =>
    onDropdownChange(option);

  const getButtonText = (): string => {
    if (formMode === 'create') {
      return isOnlyBindingKeyPeople ? 'Bind' : 'Create & Bind';
    }
    return 'Edit';
  };

  return (
    <StyledAccountsForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name<StyledStar>*</StyledStar>
      </label>
      <Controller
        control={control}
        {...register('name', {
          onChange: (event) => handleDropdownChange(event.target.value),
        })}
        render={({ field }) => (
          <Dropdown
            {...field}
            isDisabled={formMode === 'edit'}
            options={getDropdownOptions(keyPeopleState, accountKeyPeopleState)}
            placeholder="Type Key people name"
            isCreatable
          />
        )}
      />
      <label>
        Role<StyledStar>*</StyledStar>
      </label>
      <Controller
        control={control}
        {...register('role', {
          required: true,
        })}
        render={({ field }) => (
          <GenericInput
            {...field}
            required
            disabled={isOnlyBindingKeyPeople}
            placeholder="Role"
            error={!!errors['role']}
            errorMessage={'The role is required'}
          />
        )}
      />
      <label>
        Email<StyledStar>*</StyledStar>
      </label>
      <Controller
        control={control}
        {...register('email', {
          required: true,
          //eslint-disable-next-line
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        render={({ field }) => (
          <GenericInput
            {...field}
            disabled={isOnlyBindingKeyPeople}
            placeholder="email@perficient.com"
            error={!!errors['email']}
            errorMessage={'invalid email address'}
          />
        )}
      />
      <label>
        Importance of the person for the account<StyledStar>*</StyledStar>
      </label>
      <Controller
        name="importance"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <TextArea
            {...field}
            placeholder="Why is this person important for this account?"
            error={!!errors['importance']}
            errorMessage={'The importance is required'}
          />
        )}
      />

      <StyledAccountsButtons>
        <Button text="Cancel" variant="secondary" onClick={handleCancel} />
        <Button
          text={getButtonText()}
          variant="primary"
          type="submit"
          onClick={handleSave}
          disabled={!isValid}
        />
      </StyledAccountsButtons>
    </StyledAccountsForm>
  );
}
export default KeyPeopleForm;
