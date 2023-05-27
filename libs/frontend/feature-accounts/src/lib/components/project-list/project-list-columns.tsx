import { Project } from '@delia/frontend/core';
import { Button, DetailsIcon, StatusLabel } from '@delia/ui-shared';
import { ColumnDef } from '@tanstack/react-table';

import ProjectNameRender from '../project-name-render/project-name-render';
import { StyledDimensionsContainer } from './project-list.styles';

export const getProjectListColumns = () => {
  const projects: Array<ColumnDef<Project, any>> = [
    {
      header: 'Name',
      accessorKey: 'name',
      enableColumnFilter: false,
      cell: (items: any) => {
        return (
          <ProjectNameRender
            name={items.row.original.name}
            portfolio={items.row.original.account?.portfolio.name}
          />
        );
      },
    },
    {
      header: 'Type',
      enableColumnFilter: false,
      cell: () => {
        return <p>Project</p>;
      },
    },
    {
      header: 'Status',
      accessorKey: 'status',
      enableColumnFilter: false,
    },
    {
      header: 'Last updated',
      accessorKey: 'statusChangeDate',
      enableColumnFilter: false,
      accessorFn: (project) => project.statusChangeDate.toDateString(),
      cell: (items: any) => {
        return <p>{items.row.original.statusChangeDate?.toDateString()}</p>;
      },
    },
    {
      header: 'Dimensions',
      accessorKey: 'dimensions',
      enableColumnFilter: false,
      enableSorting: false,
      cell: (items: any) => {
        return (
          <StyledDimensionsContainer>
            <StatusLabel
              text="Team"
              status={items.row.original.team?.status}
              content={items.row.original.team?.observations}
            />
            <StatusLabel
              text="Plan"
              status={items.row.original.plan?.status}
              content={items.row.original.plan?.observations}
            />
            <StatusLabel
              text="Process"
              status={items.row.original.process?.status}
              content={items.row.original.process?.observations}
            />
            <StatusLabel
              text="QA"
              status={items.row.original.QA?.status}
              content={items.row.original.QA?.observations}
            />
            <StatusLabel
              text="Gut"
              status={items.row.original.gut?.status}
              content={items.row.original.gut?.observations}
            />
          </StyledDimensionsContainer>
        );
      },
    },
    {
      id: '1',
      cell: (items: any) => {
        return <Button text="" type="icon" icon={<DetailsIcon width={20} />} />;
      },
    },
  ];
  return projects;
};
