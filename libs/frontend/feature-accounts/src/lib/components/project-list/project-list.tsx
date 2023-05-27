import { DataTable, Loader } from '@delia/ui-shared';
import {
  StyledProjectListContainer,
  StyledSubtitle,
} from './project-list.styles';
import { getProjectListColumns } from './project-list-columns';
import { ProjectsPloc, ProjectsState } from '@delia/frontend/core';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export interface ProjectListProps {
  ploc: ProjectsPloc;
  state: ProjectsState;
}

export function ProjectList({ ploc, state }: ProjectListProps) {
  const { accountId } = useParams();

  useEffect(() => {
    const accountProjects = () => {
      if (accountId) ploc.getAccountProjects(accountId);
    };
    accountProjects();
  }, []);

  switch (state.kind) {
    case 'LoadingProjectsState': {
      return <Loader />;
    }
    case 'ErrorLoadProjectState': {
      return <h1>Error</h1>;
    }
    case 'LoadedProjectsState': {
      return (
        <StyledProjectListContainer>
          <StyledSubtitle>Projects</StyledSubtitle>
          <DataTable
            pagination={true}
            postsPerPage={5}
            pagesLimit={3}
            emptyMessage={`There's no Projects yet.`}
            items={state.projects.filter((project) => {
              return (
                project.status === 'Execution' ||
                project.status === 'Risk' ||
                project.status === 'Completed' ||
                project.status === 'Closed'
              );
            })}
            columns={getProjectListColumns()}
          />
        </StyledProjectListContainer>
      );
    }
    default:
      return null;
  }
}

export default ProjectList;
