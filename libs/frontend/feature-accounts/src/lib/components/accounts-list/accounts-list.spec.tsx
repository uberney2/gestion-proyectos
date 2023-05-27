/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';
import { AccountsList } from './accounts-list';
import {
  LoadedAccountsState,
  ErrorAccountsState,
  LoadingAccountsState,
} from '@delia/frontend/core';
import { BrowserRouter } from 'react-router-dom';

describe('Accounts List Rendered Succesfully with Different States', () => {
  const renderAccountList = ({ ploc, state }: Partial<any> = {}) =>
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AccountsList ploc={mockPloc} state={state} handleNew={handleNew} />
        </ThemeProvider>
      </BrowserRouter>
    );

  const mockPloc: any = {
    getAll: () => {
      return;
    },
  };

  const handleNew = () => {
    return;
  };

  const mockStateLoaded: LoadedAccountsState = {
    kind: 'LoadedAccountsState',
    accounts: [
      {
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
      {
        id: 'a60b831a-d782-4390-a35b-519af3293583',
        name: 'Perficient2',
        buOwner: {
          name: 'Cld Platform Sol',
          id: '058934c9-261a-42a5-a46a-69721ef055be',
        },
        portfolio: {
          id: 'a60b831a-d782-4390-a35b-519af3294922',
          name: 'Portfolio1',
        },
        status: 'active',
        keyPeople: [],
      },
    ],
  };

  const mockStateLoading: LoadingAccountsState = {
    kind: 'LoadingAccountsState',
  };

  it('should render Loading Screen successfully', () => {
    const { baseElement } = renderAccountList({ state: mockStateLoading });
    expect(baseElement).toBeTruthy();
  });

  const mockStateError: ErrorAccountsState = {
    kind: 'ErrorAccountsState',
    error: 'Error',
  };

  it('should render Error Message successfully', () => {
    const { baseElement } = renderAccountList({ state: mockStateError });
    expect(baseElement).toHaveTextContent('Error');
  });
  it('should render Error Screen successfully', () => {
    const { baseElement } = renderAccountList({ state: mockStateError });
    expect(baseElement).toBeTruthy();
  });
});
