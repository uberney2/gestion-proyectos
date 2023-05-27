import { FieldValues, useForm } from 'react-hook-form';
import { Button } from '@delia/ui-shared';
import DimensionStatusForm from '../dimension-status-form/dimension-status-form';
import {
  StyledGutButtons,
  StyledGutForm,
  StyledGutInfo,
} from './gut-form.styles';
import { Gut } from '@delia/frontend/core';
import { useEffect } from 'react';
import { setFormGut } from './gut-form-logic';
export interface GutFormProps {
  handleSave?: () => void;
  handleCancel?: () => void;
  onSubmit: (data: any) => void;
  defaultGut?: Gut;
  setIsDirty: (isDirty: boolean) => void;
}

export function GutForm({
  handleSave,
  handleCancel,
  onSubmit,
  defaultGut,
  setIsDirty,
}: GutFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    reset,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: defaultGut || {
      observations: undefined,
      status: undefined,
    },
  });

  useEffect(() => {
    setIsDirty(isDirty);
  }, [isDirty]);

  useEffect(() => {
    defaultGut && setFormGut(reset, defaultGut);
  }, [defaultGut]);

  return (
    <StyledGutForm onSubmit={handleSubmit(onSubmit)}>
      <StyledGutInfo>
        In addition to the previous points, how is your feeling of the team's
        general health? also thinking about external factors? such as the
        relationship with the client or other factors that may represent a risk
        to the health of the project.
      </StyledGutInfo>
      <DimensionStatusForm control={control} dimensionName="Gut" />
      <StyledGutButtons>
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
      </StyledGutButtons>
    </StyledGutForm>
  );
}

export default GutForm;
