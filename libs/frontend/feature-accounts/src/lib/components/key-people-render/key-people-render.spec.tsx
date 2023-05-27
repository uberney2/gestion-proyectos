import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import KeyPeopleRender from './key-people-render';

describe('KeyPeopleRender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <KeyPeopleRender />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
