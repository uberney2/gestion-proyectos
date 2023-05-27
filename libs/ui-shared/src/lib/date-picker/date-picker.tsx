import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '../icon-svg';
import { StyledDatePicker } from './date-picker.styles';

export interface DatePickerProps {
  selected?: Date;
  onChange: () => void;
  minDate?: Date | null | undefined;
  maxDate?: Date | null | undefined;
}

export const DatePickerComponent = ({
  selected,
  onChange,
  minDate,
  maxDate,
}: DatePickerProps) => {
  return (
    <StyledDatePicker>
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText="DD-MM-AAAA"
        dateFormat={'dd/MM/yyyy'}
        minDate={minDate}
        maxDate={maxDate}
      />
      <CalendarIcon width={20} />
    </StyledDatePicker>
  );
};
