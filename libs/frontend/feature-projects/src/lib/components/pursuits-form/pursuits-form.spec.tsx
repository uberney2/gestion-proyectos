import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import { PursuitsForm } from './pursuits-form';
import { Account, CreatedProjectState } from '@delia/frontend/core';
import { BrowserRouter } from 'react-router-dom';

describe('PursuitsForm', () => {
  it('should render successfully', () => {
    interface renderProps {
      accounts: Account[];
      projectTypeStatusRelation: { Pursuit: string[]; Project: string[] };
      onSubmit: (data: any) => void;
    }

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

    const onProjectNameChange = (name: string) => {
      console.log(name);
    };

    const setIsDirty = (isDirty: boolean) => {
      return;
    };

    const renderPursuitsForm = ({
      accounts,
      projectTypeStatusRelation,
      onSubmit,
    }: renderProps) =>
      render(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <PursuitsForm
              onProjectNameChange={onProjectNameChange}
              projectsState={mockProjectState}
              formMode={'create'}
              accounts={accounts}
              projectTypeStatusRelation={projectTypeStatusRelation}
              onSubmit={onSubmit}
              setIsDirty={setIsDirty}
            />
          </ThemeProvider>
        </BrowserRouter>
      );

    const accounts: Account[] = [];
    const projectTypeStatusRelation = { Pursuit: [], Project: [] };
    const handleSubmit = (data: any) => {
      console.log(data);
    };

    const { baseElement } = renderPursuitsForm({
      accounts: accounts,
      projectTypeStatusRelation,
      onSubmit: handleSubmit,
    });
    expect(baseElement).toBeTruthy();
  });
});
