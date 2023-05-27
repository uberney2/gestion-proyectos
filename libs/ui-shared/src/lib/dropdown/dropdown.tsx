import { StyledDropdown, CreatableStyledDropdown } from './dropdown.styles';

/* eslint-disable-next-line */
export interface DropdownProps<T> {
  placeholder: string;
  options: T[];
  onChange?: (something?: any) => void;
  isDisabled?: boolean;
  isMulti?: boolean;
  error?: boolean;
  isCreatable?: boolean;
}

export function Dropdown<T>({
  isCreatable = false,
  isMulti = false,
  error,
  ...props
}: DropdownProps<T>) {
  const Component = isCreatable ? CreatableStyledDropdown : StyledDropdown;

  return (
    <Component
      className={error ? 'error' : ''}
      classNamePrefix="Select"
      isMulti={isMulti}
      isClearable={isCreatable}
      {...props}
    />
  );
}

export default Dropdown;
