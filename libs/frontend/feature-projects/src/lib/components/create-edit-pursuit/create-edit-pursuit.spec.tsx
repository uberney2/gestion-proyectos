import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import CreateEditPursuit from './create-edit-pursuit';
import { BrowserRouter } from 'react-router-dom';
import {
  CreatedAccountState,
  CreatedProjectState,
  CreatedTeamState,
  CreatedPlanState,
  CreatedProcessState,
  AccountabilityLevelEnum,
  CreatedQAState,
  CreatedGutState,
} from '@delia/frontend/core';

describe('CreateEditPursuit', () => {
  const mockAccountStateCreated: CreatedAccountState = {
    kind: 'CreatedAccountState',
    account: {
      id: 'a60b831a-d782-4390-a35b-519af3293583',
      name: 'Perficient',
      buOwner: {
        name: 'Cld Platform Sol',
        id: '058934c9-261a-42a5-a46a-69721ef055be',
      },
      portfolio: {
        id: 'a60b831a-d782-4390-a35b-519af3294922',
        name: 'Portfolio1',
      },
      status: 'active',
      keyPeople: [
        {
          id: 'b60b831a-d782-4390-a36b-519af3293589',
          name: 'Juan Poveda',
          role: 'director',
          email: 'admin90@perficient.com',
          importance: 'note',
          createdAt: '2022-12-31T22:09:23.696Z',
          updatedAt: '2022-12-31T22:09:23.696Z',
          status: 'status',
        },
      ],
    },
  };

  const accountsPloc: any = {
    getAll: () => {
      return;
    },
  };

  const projectsPloc: any = {
    create: () => {
      return;
    },
    getAll: () => {
      return;
    },

    update: () => {
      return;
    },
  };

  const teamsPloc: any = {
    create: () => {
      return;
    },
    getAll: () => {
      return;
    },
    update: () => {
      return;
    },
  };

  const plansPloc: any = {
    create: () => {
      return;
    },
    getAll: () => {
      return;
    },
    update: () => {
      return;
    },
  };

  const processPloc: any = {
    create: () => {
      return;
    },
    getAll: () => {
      return;
    },
    update: () => {
      return;
    },
  };

  const qaPloc: any = {
    create: () => {
      return;
    },
    getAll: () => {
      return;
    },
    update: () => {
      return;
    },
  };

  const gutPloc: any = {
    create: () => {
      return;
    },
    getAll: () => {
      return;
    },
    update: () => {
      return;
    },
  };

  const mockTeamState: CreatedTeamState = {
    kind: 'CreatedTeamState',
    team: {
      id: 'b60b831a-d782-4390-a36b-519af3293590',
      composition: 'Lorem ipsum',
      teamConfiguration: 'Lorem ipsum',
      englishLevel: 'Lorem ipsum',
      deployDate: new Date(),
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

  const mockPlanState: CreatedPlanState = {
    kind: 'CreatedPlanState',
    plan: {
      id: '11809f96-601c-49a7-a9d2-ca04e986c016',
      backlogResponsible: 'lorem ipsum',
      roadMap: 'roadMap',
      deliverables: 'deliverable',
    },
  };

  const mockProcessState: CreatedProcessState = {
    kind: 'CreatedProcessState',
    process: {
      id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabc9',
      stack: 'Lorem ipsum',
      methodology: 'Lorem ipsum',
      frequencyToDeploy: 'Lorem ipsum',
      latamInfluence: 'Lorem ipsum',
      accountabilityLevel: 'Based on Client' as AccountabilityLevelEnum,
    },
  };

  const mockQAState: CreatedQAState = {
    kind: 'CreatedQAState',
    qa: {
      id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabce',
      currentStatus: 'currentStatus lorem ipsum',
      testTools: 'testTools lorem ipsum',
      automationLevel: 'automationLevel lorem ipsum',
      manualProcess: false,
      automatedProcess: true,
    },
  };

  const mockGutState: CreatedGutState = {
    kind: 'CreatedGutState',
    gut: {
      id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabce',
      observations: 'observations lorem ipsum',
      status: 'Warning',
    },
  };

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CreateEditPursuit
            projectsPloc={projectsPloc}
            projectsState={mockProjectState}
            teamsPloc={teamsPloc}
            teamsState={mockTeamState}
            qaPloc={qaPloc}
            qaState={mockQAState}
            formMode={'create'}
            plansState={mockPlanState}
            plansPloc={plansPloc}
            processState={mockProcessState}
            processPloc={processPloc}
            gutState={mockGutState}
            gutPloc={gutPloc}
            accountsState={mockAccountStateCreated}
            accountsPloc={accountsPloc}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
