import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';
import { DimensionStatusForm } from './dimension-status-form';
import { useForm } from 'react-hook-form';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  Controller: () => <></>,
  useForm: () => ({
    control: () => ({}),
  }),
}));

describe('DimensionStatusForm', () => {
  it('should render successfully', () => {
    const { control } = useForm();

    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <DimensionStatusForm dimensionName="" control={control} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
