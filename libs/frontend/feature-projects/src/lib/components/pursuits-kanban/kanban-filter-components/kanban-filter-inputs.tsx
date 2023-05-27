import { BuOwner, Portfolio } from '@delia/frontend/core';
import { Dropdown, GenericInput } from '@delia/ui-shared';
import { useEffect } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { KanbanFilters } from '../pursuits-kanban-logic';
import { StyledPursuitsKanbanInputs } from '../pursuits-kanban.styles';
import {
  DropdownOption,
  fromDataToInputs,
  setKanbanInputs,
} from './kanban-filter-inputs-logic';

interface KanbanFilterInputsProps {
  buOwnerOptions: BuOwner[];
  portfolioOptions: Portfolio[];
  onPortfolioChange?: (portfolio?: { id?: string; name?: string }) => void;
  onBuOwnerChange?: (buOwner?: { id?: string; name?: string }) => void;
  onNameChange?: (pursuitName: string) => void;
  defaultData?: KanbanFilters;
}

export function KanbanFilterInputs({
  buOwnerOptions,
  portfolioOptions,
  onPortfolioChange,
  onBuOwnerChange,
  onNameChange,
  defaultData,
}: KanbanFilterInputsProps) {
  const { control, register, reset } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      portfolio: undefined,
      buOwner: undefined,
      name: undefined,
    },
  });

  useEffect(() => {
    defaultData && setKanbanInputs(reset, fromDataToInputs(defaultData));
  }, [defaultData]);

  function handlePortfolioChange(selectedOption: DropdownOption) {
    onPortfolioChange &&
      onPortfolioChange({
        id: selectedOption.value,
        name: selectedOption.label,
      });
  }

  function handleBuOwnerChange(selectedOption: DropdownOption) {
    onBuOwnerChange &&
      onBuOwnerChange({ id: selectedOption.value, name: selectedOption.label });
  }

  function handleNameChange(name: string) {
    onNameChange && onNameChange(name);
  }

  return (
    <StyledPursuitsKanbanInputs>
      <label>
        Search Pursuit
        <Controller
          control={control}
          {...register('name', {
            onChange: (event) => handleNameChange(event.target.value),
          })}
          render={({ field }) => (
            <GenericInput {...field} required placeholder="Entered text" />
          )}
        />
      </label>
      <label>
        BU Owner
        <Controller
          control={control}
          {...register('buOwner', {
            onChange: (event) => handleBuOwnerChange(event.target.value),
          })}
          render={({ field }) => (
            <Dropdown
              {...field}
              options={buOwnerOptions.map((buOwner) => {
                return { label: buOwner.name, value: buOwner.id };
              })}
              placeholder="Select the Business Unit"
            />
          )}
        />
      </label>
      <label>
        Portfolio
        <Controller
          control={control}
          {...register('portfolio', {
            onChange: (event) => handlePortfolioChange(event.target.value),
          })}
          render={({ field }) => (
            <Dropdown
              {...field}
              options={portfolioOptions.map((portfolio) => {
                return { label: portfolio.name, value: portfolio.id };
              })}
              placeholder="Select Portfolio Name"
            />
          )}
        />
      </label>
    </StyledPursuitsKanbanInputs>
  );
}
