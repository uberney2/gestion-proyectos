import { KeyPeople } from '@delia/frontend/core';
import { Button, LinkIcon, PencilIcon, PersonIcon } from '@delia/ui-shared';
import { ColumnDef } from '@tanstack/react-table';

interface GetKeyPeopleListColumnsProps {
  pencilClick: (keyPeople: KeyPeople) => void;
  linkIconClick: (keyPeople: KeyPeople) => void;
}

export const getKeyPeopleListColumns = ({
  pencilClick,
  linkIconClick,
}: GetKeyPeopleListColumnsProps) => {
  const columns: Array<ColumnDef<KeyPeople, any>> = [
    {
      header: 'Name',
      accessorKey: 'name',
      cell: (items: any) => {
        return (
          <>
            <Button text="" type="icon" icon={<PersonIcon width={38} />} />
            {items.row.original.name}
          </>
        );
      },
      enableColumnFilter: false,
    },
    {
      header: 'Role',
      accessorKey: 'role',
      enableColumnFilter: false,
    },
    {
      header: 'Email',
      accessorKey: 'email',
      enableColumnFilter: false,
    },
    {
      header: 'Importance',
      accessorKey: 'importance',
      enableColumnFilter: false,
    },
    {
      id: '1',
      cell: (items: any) => {
        return (
          <>
            <Button
              text=""
              type="icon"
              icon={
                <PencilIcon
                  width={18}
                  onClick={() => pencilClick({ ...items.row.original })}
                />
              }
            />
            <Button
              text=""
              type="icon"
              icon={<LinkIcon width={18} />}
              onClick={() => linkIconClick({ ...items.row.original })}
            />
          </>
        );
      },
      enableColumnFilter: false,
    },
  ];
  return columns;
};
