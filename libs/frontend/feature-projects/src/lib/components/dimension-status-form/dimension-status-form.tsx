import { Dropdown, TextArea } from '@delia/ui-shared';
import { Control, Controller, FieldValues } from 'react-hook-form';
import {
  StyledContainerStatusForm,
  StyledStatusTitle,
  StyledItemsForm,
} from './dimension-status-form.styles';
import { DimensionStatus } from '@delia/frontend/core';

export interface DimensionStatusFormProps {
  control: Control<FieldValues, any>;
  dimensionName: string;
}

export function DimensionStatusForm({
  control,
  dimensionName,
}: DimensionStatusFormProps) {
  return (
    <>
      <StyledStatusTitle>Status Information</StyledStatusTitle>
      <StyledContainerStatusForm>
        <StyledItemsForm>
          <label>
            {dimensionName} Status
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={Object.values(DimensionStatus).map((dimension) => {
                    return {
                      label: dimension,
                    };
                  })}
                  placeholder="Lorem Ipsum"
                />
              )}
            />
          </label>
        </StyledItemsForm>
        <label>
          {dimensionName} Observations
          <Controller
            name="observations"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nibh quis eros fermentum semper."
              />
            )}
          />
        </label>
      </StyledContainerStatusForm>
    </>
  );
}

export default DimensionStatusForm;
