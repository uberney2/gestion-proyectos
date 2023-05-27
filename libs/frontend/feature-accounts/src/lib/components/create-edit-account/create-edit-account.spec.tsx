/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';
import CreateEditAccount from './create-edit-account';
import { BrowserRouter } from 'react-router-dom';
import {
  AccountsState,
  BuOwnersState,
  CreatedAccountState,
  LoadedBuOwnersState,
  LoadedPortfoliosState,
  PortfoliosState,
  AccountKeyPeopleState,
  LoadedAccountKeyPeopleState,
  ProjectsState,
} from '@delia/frontend/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  KeyPeopleState,
  LoadedKeyPeopleState,
} from 'libs/frontend/core/src/lib/key-people';

describe('Create edit account', () => {
  interface renderProps {
    accountsState: AccountsState;
    buOwnersState: BuOwnersState;
    portfoliosState: PortfoliosState;
    accountKeyPeopleState: AccountKeyPeopleState;
    keyPeopleState: KeyPeopleState;
    projectState: ProjectsState;
  }
  const renderAccountsForm = ({
    accountsState,
    buOwnersState,
    portfoliosState,
    accountKeyPeopleState,
    keyPeopleState,
    projectState,
  }: renderProps) =>
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CreateEditAccount
            formMode={'create'}
            buOwnerPloc={buOwnerPloc}
            accountsPloc={accountsPloc}
            portfoliosPloc={portfoliosPloc}
            accountKeyPeoplePloc={accountKeyPeoplePloc}
            accountsState={accountsState}
            buOwnersState={buOwnersState}
            portfoliosState={portfoliosState}
            accountKeyPeopleState={accountKeyPeopleState}
            keyPeoplePloc={keyPeoplePloc}
            keyPeopleState={keyPeopleState}
            projectPloc={projectPloc}
            projectState={projectState}
          />
        </ThemeProvider>
      </BrowserRouter>
    );

  const keyPeoplePloc: any = {
    getAll: () => {
      return;
    },
  };

  const projectPloc: any = {
    getAll: () => {
      return;
    },
  };

  const mockProjectState: ProjectsState = {
    kind: 'LoadedProjectsState',
    projects: [],
  };

  const mockStateKeyPeopleLoaded: LoadedKeyPeopleState = {
    kind: 'LoadedKeyPeopleState',
    keyPeople: [],
  };

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

  const buOwnersStateLoaded: LoadedBuOwnersState = {
    kind: 'LoadedBuOwnersState',
    buOwners: [],
  };

  const portfoliosStateLoaded: LoadedPortfoliosState = {
    kind: 'LoadedPortfoliosState',
    portfolios: [],
  };

  const accountKeyPeopleStateLoaded: LoadedAccountKeyPeopleState = {
    kind: 'LoadedAccountKeyPeopleState',
    accountKeyPeople: {
      id: 'b60b831a-d782-4390-a36b-519af3293589',
      keyPeople: [],
    },
  };

  const buOwnerPloc: any = {
    getAll: () => {
      return;
    },
  };

  const accountsPloc: any = {
    getAll: () => {
      return;
    },
  };

  const portfoliosPloc: any = {
    getAll: () => {
      return;
    },
  };

  const accountKeyPeoplePloc: any = {
    getAll: () => {
      return;
    },
  };
  it('should render screen successfully', () => {
    const { baseElement } = renderAccountsForm({
      accountsState: mockAccountStateCreated,
      buOwnersState: buOwnersStateLoaded,
      portfoliosState: portfoliosStateLoaded,
      accountKeyPeopleState: accountKeyPeopleStateLoaded,
      keyPeopleState: mockStateKeyPeopleLoaded,
      projectState: mockProjectState,
    });
    expect(baseElement).toBeTruthy();
  });
});
