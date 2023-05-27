import { Button, Loader, PencilIcon } from '@delia/ui-shared';
import { DataTable } from '@delia/ui-shared';
import {
  StyledAccountsListContainer,
  StyledAccountsListHeading,
} from './accounts-list.styles';
import {
  Account,
  AccountsPloc,
  AccountsState,
  BuOwner,
  Portfolio,
} from '@delia/frontend/core';
import { useEffect } from 'react';
import KeyPeopleRender from '../key-people-render/key-people-render';
import { useNavigate } from 'react-router-dom';
import { ColumnDef, FilterFn } from '@tanstack/react-table';

export interface AccountsListProps {
  ploc: AccountsPloc;
  state: AccountsState;
  handleNew: () => void;
}

export function AccountsList({ ploc, state, handleNew }: AccountsListProps) {
  const navigate = useNavigate();
  const compareStringInsensitive = (valueA: string, valueB: string) => {
    return Boolean(valueB.toLowerCase().includes(valueA.toLowerCase()));
  };
  const filterByPortfolio: FilterFn<Account> = (row, columnId, value) => {
    return compareStringInsensitive(value, row.getValue<string>(columnId));
  };
  const filterByBU: FilterFn<Account> = (row, columnId, value) => {
    return compareStringInsensitive(value, row.getValue<string>(columnId));
  };
  const handleEdit = (account: Account) => {
    ploc.setAccount(account);
    navigate('edit/:accountId'.replace(':accountId', account.id));
  };
  const columns: Array<ColumnDef<Account, any>> = [
    {
      header: 'Name',
      accessorKey: 'name',
      filterFn: 'includesString',
    },
    {
      header: 'Portfolio',
      accessorKey: 'portfolio',
      filterFn: filterByPortfolio,
      accessorFn: (row) => row.portfolio.name,
      cell: (items: any) => {
        return items.row.original.portfolio?.name;
      },
    },
    {
      header: 'BU Owner',
      accessorKey: 'buOwner',
      filterFn: filterByBU,
      accessorFn: (row) => row.buOwner.name,
      cell: (items: any) => {
        return items.row.original.buOwner?.name;
      },
    },
    {
      header: 'Key People',
      accessorKey: 'keyPeople',
      enableColumnFilter: false,
      enableSorting: false,
      cell: (items: any) => {
        return (
          <KeyPeopleRender
            name={items.row.original.keyPeople[0]?.name}
            role={items.row.original.keyPeople[0]?.role}
          />
        );
      },
    },
    {
      id: '1',
      enableSorting: false,
      cell: (items: any) => {
        return (
          <Button
            onClick={() => handleEdit({ ...items.row.original })}
            type="icon"
            text=""
            icon={<PencilIcon width={16} />}
          />
        );
      },
    },
  ];

  useEffect(() => {
    const searchAccounts = () => {
      ploc.getAll();
    };
    searchAccounts();
  }, []);

  switch (state.kind) {
    case 'LoadingAccountsState': {
      return <Loader />;
    }
    case 'ErrorAccountsState': {
      return <h1>Error</h1>;
    }
    case 'LoadedAccountsState': {
      return (
        <StyledAccountsListContainer>
          <StyledAccountsListHeading>
            <h1>Accounts</h1>
            <Button text="New Account" onClick={handleNew} />
          </StyledAccountsListHeading>
          <DataTable
            items={state.accounts}
            columns={columns}
            pagination={true}
            postsPerPage={6}
            pagesLimit={3}
            emptyMessage={'There’s no Accounts yet.'}
          />
        </StyledAccountsListContainer>
      );
    }
    default:
      return null;
  }
}

export default AccountsList;
