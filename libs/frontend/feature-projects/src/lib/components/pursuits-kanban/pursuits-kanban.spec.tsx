import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import PursuitsKanban from './pursuits-kanban';
import {
  CreatedProjectState,
  LoadedBuOwnersState,
  LoadedPortfoliosState,
} from '@delia/frontend/core';

describe('PursuitsKanban', () => {
  const projectsPloc: any = {
    create: () => {
      return;
    },
    getAllWithDimension: () => {
      return;
    },
  };

  const mockProjectState: CreatedProjectState = {
    kind: 'CreatedProjectState',
    project: {
      id: 'b60b831a-d782-4390-a36b-519af3293589',
      name: 'Project 1',
      usaPointOfContact: 'USA',
      responsibleFromLatam: ['Jorge '],
      statusChangeDate: new Date(),
    },
  };

  const mockBuOwnersStateLoaded: LoadedBuOwnersState = {
    kind: 'LoadedBuOwnersState',
    buOwners: [],
  };

  const mockPortfoliosStateLoaded: LoadedPortfoliosState = {
    kind: 'LoadedPortfoliosState',
    portfolios: [],
  };

  const buOwnerPloc: any = {
    getAll: () => {
      return;
    },
  };

  const portfoliosPloc: any = {
    getAll: () => {
      return;
    },
  };

  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <PursuitsKanban
          handleNew={() => {
            return;
          }}
          projectsPloc={projectsPloc}
          projectState={mockProjectState}
          buOwnersPloc={buOwnerPloc}
          buOwnersState={mockBuOwnersStateLoaded}
          portfoliosPloc={portfoliosPloc}
          portfoliosState={mockPortfoliosStateLoaded}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
