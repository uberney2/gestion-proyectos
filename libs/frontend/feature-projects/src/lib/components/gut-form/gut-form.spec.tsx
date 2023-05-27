import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import { GutForm } from './gut-form';

describe('GutForm', () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const defaultGut = undefined;

  const setIsDirty = (isDirty: boolean) => {
    return;
  };
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <GutForm
          setIsDirty={setIsDirty}
          onSubmit={onSubmit}
          defaultGut={defaultGut}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
