import {
  StyledProcessButtons,
  StyledContainerForm,
  StyledProcessForm,
} from './process-form.styles';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button, Dropdown, TextArea } from '@delia/ui-shared';
import DimensionStatusForm from '../dimension-status-form/dimension-status-form';
import { useEffect } from 'react';
import { setFormProcess } from './process-form-logic';
import { AccountabilityLevelEnum, Process } from '@delia/frontend/core';

export interface ProcessFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  onSubmit: (data: any) => void;
  defaultProcess?: Process;
  setIsDirty: (isDirty: boolean) => void;
}

export function ProcessForm({
  handleSave,
  handleCancel,
  onSubmit,
  defaultProcess,
  setIsDirty,
}: ProcessFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    reset,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      stack: undefined,
      methodology: undefined,
      frequencyToDeploy: undefined,
      latamInfluence: undefined,
      accountabilityLevel: undefined,
      observations: undefined,
      status: undefined,
    },
  });

  useEffect(() => {
    setIsDirty(isDirty);
  }, [isDirty]);

  useEffect(() => {
    defaultProcess && setFormProcess(reset, defaultProcess);
  }, [defaultProcess]);

  return (
    <StyledProcessForm onSubmit={handleSubmit(onSubmit)}>
      <StyledContainerForm>
        <label>
          Which is the technology stack (back, front, BD, integration, Testing)?
          <Controller
            name="stack"
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
          Agile Methodology and Process description
          <Controller
            name="methodology"
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
          Frequency to deploy
          <Controller
            name="frequencyToDeploy"
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
          LATAM influence in the management
          <Controller
            name="latamInfluence"
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
          Accountability Level
          <Controller
            name="accountabilityLevel"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={Object.values(AccountabilityLevelEnum).map((level) => {
                  return {
                    label: level,
                  };
                })}
                placeholder="Lorem Ipsum"
              />
            )}
          />
        </label>
      </StyledContainerForm>
      <DimensionStatusForm control={control} dimensionName="Process" />
      <StyledProcessButtons>
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
      </StyledProcessButtons>
    </StyledProcessForm>
  );
}

export default ProcessForm;
