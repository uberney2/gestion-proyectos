import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import { TeamForm } from './team-form';

describe('TeamForm', () => {
  const onSubmit = (data: any) => {
    return;
  };

  const setIsDirty = (isDirty: boolean) => {
    return;
  };

  const defaultTeam = undefined;
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <TeamForm
          setIsDirty={setIsDirty}
          onSubmit={onSubmit}
          defaultTeam={defaultTeam}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
