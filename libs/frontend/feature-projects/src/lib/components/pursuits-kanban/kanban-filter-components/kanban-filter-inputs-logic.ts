import { FieldValues, UseFormReset } from 'react-hook-form';
import { KanbanFilters } from '../pursuits-kanban-logic';

export interface DropdownOption {
  label?: string;
  value?: string;
}

export interface KanbanInputsProps {
  name?: string;
  buOwner?: DropdownOption;
  portfolio?: DropdownOption;
}

export const setKanbanInputs = (
  reset: UseFormReset<FieldValues>,
  inputs: KanbanInputsProps
) => {
  reset({ ...inputs });
};

export function fromDataToInputs(
  defaultData: KanbanFilters
): KanbanInputsProps {
  const { name, buOwner, portfolio } = defaultData;
  return {
    name,
    buOwner: buOwner?.name
      ? { label: buOwner?.name, value: buOwner?.id }
      : undefined,
    portfolio: portfolio?.name
      ? { label: portfolio?.name, value: portfolio?.id }
      : undefined,
  };
}
