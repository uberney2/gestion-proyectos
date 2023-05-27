import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import { PlanForm } from './plan-form';

describe('PlanForm', () => {
  const onSubmit = (data: any) => {
    return;
  };

  const setIsDirty = (isDirty: boolean) => {
    return;
  };

  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <PlanForm setIsDirty={setIsDirty} onSubmit={onSubmit} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
