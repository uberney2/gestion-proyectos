/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';
import { BrowserRouter } from 'react-router-dom';
import {
  AccountsState,
  BuOwnersState,
  CreatedAccountState,
  LoadedBuOwnersState,
  LoadedPortfoliosState,
  PortfoliosState,
} from '@delia/frontend/core';
import AccountsForm from './accounts-form';

describe('AccountsForm', () => {
  type Mode = 'create' | 'edit';
  interface renderProps {
    accountsState: AccountsState;
    buOwnersState: BuOwnersState;
    portfoliosState: PortfoliosState;
    formMode: Mode;
  }
  const renderAccountsForm = ({
    accountsState,
    buOwnersState,
    portfoliosState,
    formMode,
  }: renderProps) =>
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AccountsForm
            formMode={formMode}
            buOwnerPloc={buOwnerPloc}
            accountsPloc={accountsPloc}
            portfoliosPloc={portfoliosPloc}
            accountsState={accountsState}
            buOwnersState={buOwnersState}
            portfoliosState={portfoliosState}
          />
        </ThemeProvider>
      </BrowserRouter>
    );

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

  it('should render create screen successfully', () => {
    const { getByText } = renderAccountsForm({
      accountsState: mockAccountStateCreated,
      buOwnersState: mockBuOwnersStateLoaded,
      portfoliosState: mockPortfoliosStateLoaded,
      formMode: 'create',
    });
    expect(getByText('Create')).toBeTruthy();
  });

  it('should render edit screen successfully', () => {
    const { getByText } = renderAccountsForm({
      accountsState: mockAccountStateCreated,
      buOwnersState: mockBuOwnersStateLoaded,
      portfoliosState: mockPortfoliosStateLoaded,
      formMode: 'edit',
    });
    expect(getByText('Edit')).toBeTruthy();
  });

  it('should have accounts name in an input if it was created', () => {
    const { getByPlaceholderText } = renderAccountsForm({
      accountsState: mockAccountStateCreated,
      buOwnersState: mockBuOwnersStateLoaded,
      portfoliosState: mockPortfoliosStateLoaded,
      formMode: 'edit',
    });
    expect(getByPlaceholderText('Type account name')).toBeDisabled();
  });
});
