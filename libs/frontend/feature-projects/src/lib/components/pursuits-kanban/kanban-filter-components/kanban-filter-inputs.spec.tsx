import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@delia/ui-shared';

import { BuOwner, Portfolio } from '@delia/frontend/core';
import { KanbanFilterInputs } from './kanban-filter-inputs';

describe('KanbanInputs', () => {
  const buOwnerOptions: BuOwner[] = [];
  const portfolioOptions: Portfolio[] = [];

  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <KanbanFilterInputs
          buOwnerOptions={buOwnerOptions}
          portfolioOptions={portfolioOptions}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
