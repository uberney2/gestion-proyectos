import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';
import KeyPeopleForm from './key-people-form';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { LoadedKeyPeopleState } from 'libs/frontend/core/src/lib/key-people';
import {
  LoadedAccountKeyPeopleState,
  LoadedAccountState,
} from '@delia/frontend/core';

describe('Key People Form Render', () => {
  it('should render successfully', () => {
    const mockPlocKeyPeople: any = {
      getAll: () => {
        return;
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

    const accountKeyPeopleStateLoaded: LoadedAccountKeyPeopleState = {
      kind: 'LoadedAccountKeyPeopleState',
      accountKeyPeople: {
        id: 'b60b831a-d782-4390-a36b-519af3293589',
        keyPeople: [],
      },
    };

    const accountKeyPeoplePloc: any = {
      getAll: () => {
        return;
      },
    };

    const onSubmit = (data: any) => {
      console.log(data);
    };

    const onDropdownChange = ({
      label,
      value,
    }: {
      label: string;
      value: any;
    }) => {
      console.log(label);
    };

    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <KeyPeopleForm
          accountKeyPeopleState={accountKeyPeopleStateLoaded}
          formMode={'create'}
          keyPeopleState={mockStateKeyPeopleLoaded}
          onSubmit={onSubmit}
          isOnlyBindingKeyPeople={true}
          onDropdownChange={onDropdownChange}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
