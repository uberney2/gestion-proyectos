import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';
import { Kanban } from './kanban';

describe('Kanban', () => {
  const projects = [
    {
      id: 'b60b831a-d782-4390-a36b-519af3293589',
      name: 'Project 1',
      usaPointOfContact: 'USA',
      responsibleFromLatam: ['Jorge '],
      statusChangeDate: new Date(),
    },
  ];
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <Kanban projects={projects} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
