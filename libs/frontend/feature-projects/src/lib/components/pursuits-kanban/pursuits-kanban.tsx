/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  BuOwnerPloc,
  BuOwnersState,
  PortfolioPloc,
  PortfoliosState,
  ProjectsPloc,
  ProjectsState,
} from '@delia/frontend/core';
import { Button, Loader } from '@delia/ui-shared';
import { useEffect, useState } from 'react';
import {
  updatePursuit,
  filterPursuits,
  KanbanFilters,
} from './pursuits-kanban-logic';
import {
  StyledPursuitsKanbanHeading,
  StyledPursuitsKanbanTitle,
} from './pursuits-kanban.styles';
import { KanbanFilterInputs } from './kanban-filter-components/kanban-filter-inputs';
import { Kanban } from './kanban/kanban';

export interface PursuitsKanbanProps {
  handleNew: () => void;
  projectsPloc: ProjectsPloc;
  projectState: ProjectsState;
  portfoliosState: PortfoliosState;
  portfoliosPloc: PortfolioPloc;
  buOwnersState: BuOwnersState;
  buOwnersPloc: BuOwnerPloc;
}

export function PursuitsKanban({
  handleNew,
  projectsPloc,
  projectState,
  portfoliosPloc,
  portfoliosState,
  buOwnersPloc,
  buOwnersState,
}: PursuitsKanbanProps) {
  const [filters, setFilters] = useState<KanbanFilters>({
    portfolio: undefined,
    buOwner: undefined,
    name: undefined,
  });

  useEffect(() => {
    const searchProjects = () => {
      projectsPloc.getAllWithDimension();
    };
    const getBuOwners = () => {
      buOwnersPloc.getAll();
    };
    const getPortfolios = () => {
      portfoliosPloc.getAll();
    };

    searchProjects();
    getBuOwners();
    getPortfolios();
  }, []);

  useEffect(() => {
    switch (projectState.kind) {
      case 'UpdatedProjectState':
        projectsPloc.getAllWithDimension();
        break;
      default:
        break;
    }
  }, [projectState]);

  function setFilterPortfolio(portfolioId?: { id?: string; name?: string }) {
    setFilters({ ...filters, portfolio: portfolioId });
  }

  function setFilterBuOwner(buOwnerId?: { id?: string; name?: string }) {
    setFilters({ ...filters, buOwner: buOwnerId });
  }

  function setFilterName(name?: string) {
    setFilters({ ...filters, name });
  }

  function updateKanbanPursuit(pursuitId: string, containerId: string) {
    if (projectState.kind === 'LoadedProjectsState')
      updatePursuit(
        pursuitId,
        containerId,
        projectsPloc,
        projectState.projects
      );
  }

  switch (projectState.kind) {
    case 'LoadingProjectsState': {
      return <Loader />;
    }
    case 'ErrorLoadProjectsState': {
      return <h1>Error</h1>;
    }
    case 'LoadedProjectsState': {
      return (
        <div>
          <StyledPursuitsKanbanTitle>Pursuits</StyledPursuitsKanbanTitle>
          <StyledPursuitsKanbanHeading>
            <KanbanFilterInputs
              buOwnerOptions={
                buOwnersState.kind === 'LoadedBuOwnersState'
                  ? buOwnersState.buOwners
                  : []
              }
              portfolioOptions={
                portfoliosState.kind === 'LoadedPortfoliosState'
                  ? portfoliosState.portfolios
                  : []
              }
              onPortfolioChange={setFilterPortfolio}
              onBuOwnerChange={setFilterBuOwner}
              onNameChange={setFilterName}
              defaultData={filters}
            />
            <Button text="New Pursuit" onClick={handleNew} />
          </StyledPursuitsKanbanHeading>
          <Kanban
            projects={structuredClone(
              filterPursuits(filters, projectState.projects)
            )}
            onItemChange={updateKanbanPursuit}
          />
        </div>
      );
    }
    default: {
      return null;
    }
  }
}

export default PursuitsKanban;
