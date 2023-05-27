import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import { QAForm } from './qa-form';

describe('QAForm', () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const defaultQA = undefined;

  it('should render successfully', () => {
    const setIsDirty = (isDirty: boolean) => {
      return;
    };

    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <QAForm
          setIsDirty={setIsDirty}
          onSubmit={onSubmit}
          defaultQA={defaultQA}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
