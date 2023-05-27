import { Button, TextArea } from '@delia/ui-shared';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import {
  StyledContainerForm,
  StyledQAForm,
  StyledQAButtons,
  StyledCheckbox,
  StyledCheckboxContainer,
} from './qa-form.styles';
import DimensionStatusForm from '../dimension-status-form/dimension-status-form';
import { QA } from '@delia/frontend/core';
import { setFormQA } from './qa-form-logic';
import { useEffect } from 'react';

export interface QAFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  onSubmit: (data: any) => void;
  defaultQA?: QA;
  setIsDirty: (isDirty: boolean) => void;
}

export function QAForm({
  handleSave,
  handleCancel,
  onSubmit,
  defaultQA,
  setIsDirty,
}: QAFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    reset,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      currentStatus: undefined,
      testTools: undefined,
      automationLevel: undefined,
      manualProcess: undefined,
      automatedProcess: undefined,
      observations: undefined,
      status: undefined,
    },
  });

  useEffect(() => {
    setIsDirty(isDirty);
  }, [isDirty]);

  useEffect(() => {
    defaultQA && setFormQA(reset, defaultQA);
  }, [defaultQA]);

  return (
    <StyledQAForm onSubmit={handleSubmit(onSubmit)}>
      <StyledContainerForm>
        <label>
          What is the current status for QA?
          <Controller
            name="currentStatus"
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
          Are there existing tools for defect management, test cases management,
          code management, also automation?
          <Controller
            name="testTools"
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
          What is the automation level? (based on the QA Pyramid)
          <Controller
            name="automationLevel"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nibh quis eros fermentum semper."
              />
            )}
          />
        </label>
        <StyledCheckboxContainer>
          <label>
            About QA Process
            <h4>(Both can be picked if necessary)</h4>
          </label>
          <Controller
            name="manualProcess"
            control={control}
            render={({ field }) => (
              <StyledCheckbox>
                <input
                  type="checkbox"
                  {...field}
                  onChange={(e) => field.onChange(e.target.checked)}
                  checked={field.value}
                />
                <p>Manual</p>
              </StyledCheckbox>
            )}
          />

          <Controller
            name="automatedProcess"
            control={control}
            render={({ field }) => (
              <StyledCheckbox>
                <input
                  type="checkbox"
                  {...field}
                  onChange={(e) => field.onChange(e.target.checked)}
                  checked={field.value}
                />
                <p>Automation</p>
              </StyledCheckbox>
            )}
          />
        </StyledCheckboxContainer>
      </StyledContainerForm>
      <DimensionStatusForm control={control} dimensionName="QA" />
      <StyledQAButtons>
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
      </StyledQAButtons>
    </StyledQAForm>
  );
}

export default QAForm;
