import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import ProjectList from './project-list';
import { ProjectsState } from '@delia/frontend/core';

describe('ProjectList', () => {
  interface renderProps {
    projectsState: ProjectsState;
  }

  it('should render successfully', () => {
    const mockPloc: any = {
      getAccountProjects: () => {
        return;
      },
    };

    const mockState: ProjectsState = {
      kind: 'LoadingProjectsState',
    };

    const renderProjectList = ({ projectsState }: renderProps) =>
      render(
        <ThemeProvider theme={theme}>
          <ProjectList ploc={mockPloc} state={mockState} />
        </ThemeProvider>
      );

    expect(renderProjectList).toBeTruthy();
  });
});
