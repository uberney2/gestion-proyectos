import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import ProjectNameRender from './project-name-render';

describe('ProjectNameRender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <ProjectNameRender />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
