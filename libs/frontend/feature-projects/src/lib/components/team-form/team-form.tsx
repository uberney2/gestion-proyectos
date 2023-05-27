import { Button, DatePickerComponent, TextArea } from '@delia/ui-shared';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import {
  StyledContainerForm,
  StyledTeamForm,
  StyledTeamButtons,
} from './team-form.styles';
import DimensionStatusForm from '../dimension-status-form/dimension-status-form';
import { Team } from '@delia/frontend/core';
import { useEffect } from 'react';
import { setFormTeam } from './team-form-logic';

export interface TeamFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  onSubmit: (data: any) => void;
  defaultTeam?: Team;
  setIsDirty: (isDirty: boolean) => void;
}

export function TeamForm({
  handleSave,
  handleCancel,
  onSubmit,
  defaultTeam,
  setIsDirty,
}: TeamFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    reset,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      compositionRisk: defaultTeam?.composition,
      configuration: defaultTeam?.teamConfiguration,
      englishLevel: defaultTeam?.englishLevel,
      observations: defaultTeam?.observations,
      status: defaultTeam?.status,
      deployDate: defaultTeam?.deployDate,
    },
  });

  useEffect(() => {
    setIsDirty(isDirty);
  }, [isDirty]);

  useEffect(() => {
    defaultTeam && setFormTeam(reset, defaultTeam);
  }, [defaultTeam]);

  return (
    <StyledTeamForm onSubmit={handleSubmit(onSubmit)}>
      <StyledContainerForm>
        <label>
          Team composition risk
          <Controller
            name="compositionRisk"
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
          What's the team configuration expected so far? (Including Perficient,
          inhouse and other vendors)
          <Controller
            name="configuration"
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
          What English level is required? Is it required for all positions?
          <Controller
            name="englishLevel"
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
          Expected date to deploy the team
          <Controller
            name="deployDate"
            control={control}
            render={({ field: { value, ...fieldProps } }) => {
              return <DatePickerComponent {...fieldProps} selected={value} />;
            }}
          />
        </label>
      </StyledContainerForm>
      <DimensionStatusForm control={control} dimensionName="Team" />
      <StyledTeamButtons>
        <Button
          text="Cancel"
          variant="secondary"
          disabled={!isDirty}
          onClick={handleCancel}
        />
        <Button
          text={'Save'}
          variant="primary"
          type="submit"
          onClick={handleSave}
          disabled={!isDirty}
        />
      </StyledTeamButtons>
    </StyledTeamForm>
  );
}

export default TeamForm;
