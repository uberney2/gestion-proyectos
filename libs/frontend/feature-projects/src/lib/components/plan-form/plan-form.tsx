import {
  StyledPlanButtons,
  StyledPlanForm,
  StyledContainerForm,
} from './plan-form.styles';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button, TextArea } from '@delia/ui-shared';
import DimensionStatusForm from '../dimension-status-form/dimension-status-form';
import { Plan } from '@delia/frontend/core';
import { useEffect } from 'react';
import { setFormPlan } from './plan-form-logic';

export interface PlanFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  onSubmit: (data: any) => void;
  defaultPlan?: Plan;
  setIsDirty: (isDirty: boolean) => void;
}

export function PlanForm({
  handleSave,
  handleCancel,
  onSubmit,
  defaultPlan,
  setIsDirty,
}: PlanFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    reset,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      backlogResponsible: undefined,
      roadMap: undefined,
      deliverables: undefined,
      observations: undefined,
      status: undefined,
    },
  });

  useEffect(() => {
    setIsDirty(isDirty);
  }, [isDirty]);

  useEffect(() => {
    defaultPlan && setFormPlan(reset, defaultPlan);
  }, [defaultPlan]);

  return (
    <StyledPlanForm onSubmit={handleSubmit(onSubmit)}>
      <StyledContainerForm>
        <label>
          Who is/will be responsible for backlog management and User stories
          documentation
          <Controller
            name="backlogResponsible"
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
          Is there a roadmap or an execution plan for the deliverables? If so,
          How was it estimated?
          <Controller
            name="roadMap"
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
          What are the deliverables and timelines *in what time frame do you
          expect to achieve them)?
          <Controller
            name="deliverables"
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
      <DimensionStatusForm control={control} dimensionName="Plan" />
      <StyledPlanButtons>
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
      </StyledPlanButtons>
    </StyledPlanForm>
  );
}

export default PlanForm;
