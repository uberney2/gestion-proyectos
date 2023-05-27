import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import { ProcessForm } from './process-form';

describe('ProcessForm', () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const setIsDirty = (isDirty: boolean) => {
    return;
  };

  const defaultProcess = undefined;

  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <ProcessForm
          setIsDirty={setIsDirty}
          onSubmit={onSubmit}
          defaultProcess={defaultProcess}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
