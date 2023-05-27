import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import KeyPeopleList from './key-people-list';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { LoadedAccountKeyPeopleState } from 'libs/frontend/core/src/lib/accounts/accountKeyPeople';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { LoadedKeyPeopleState } from 'libs/frontend/core/src/lib/key-people';
import { LoadedAccountState } from '@delia/frontend/core';

describe('KeyPeopleRender', () => {
  it('should render successfully', () => {
    const mockPloc: any = {
      get: () => {
        return;
      },
    };

    const mockPlocKeyPeople: any = {
      getAll: () => {
        return;
      },
    };

    const mockStateLoaded: LoadedAccountKeyPeopleState = {
      kind: 'LoadedAccountKeyPeopleState',
      accountKeyPeople: {
        id: '',
        keyPeople: [],
      },
    };

    const mockStateKeyPeopleLoaded: LoadedKeyPeopleState = {
      kind: 'LoadedKeyPeopleState',
      keyPeople: [],
    };

    const accountsStateLoaded: LoadedAccountState = {
      kind: 'LoadedAccountState',
      account: {
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
    };

    const accountsPloc: any = {
      getAll: () => {
        return;
      },
    };

    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <KeyPeopleList
          accountsPloc={accountsPloc}
          accountsState={accountsStateLoaded}
          accountKeyPeoplePloc={mockPloc}
          accountKeyPeopleState={mockStateLoaded}
          keyPeoplePloc={mockPlocKeyPeople}
          keyPeopleState={mockStateKeyPeopleLoaded}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
