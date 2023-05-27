import {
  Button,
  Modal,
  DataTable,
  toastSuccess,
  toastError,
  PopUp,
  Loader,
} from '@delia/ui-shared';
import { useState } from 'react';
import KeyPeopleForm from '../key-people-form/key-people-form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledKeyPeopleListContainer,
  StyledSubtitleButton,
} from './key-people-list.styles';
import {
  Account,
  AccountKeyPeoplePloc,
  AccountKeyPeopleState,
  AccountsPloc,
  AccountsState,
  KeyPeople,
  KeyPeoplePloc,
  KeyPeopleState,
} from '@delia/frontend/core';
import { v4 as uuid } from 'uuid';
import {
  bindKeyPeopleToAccount,
  createKeyPerson,
} from './key-people-list-logic';
import { getKeyPeopleListColumns } from './key-people-list-columns';
import { isValueInObjectsArrayProperty } from '../key-people-form/key-people-form-logic';

export interface KeyPeopleListProps {
  accountKeyPeoplePloc: AccountKeyPeoplePloc;
  accountKeyPeopleState: AccountKeyPeopleState;
  keyPeoplePloc: KeyPeoplePloc;
  keyPeopleState: KeyPeopleState;
  accountsState: AccountsState;
  accountsPloc: AccountsPloc;
}

export function KeyPeopleList({
  accountKeyPeoplePloc,
  accountKeyPeopleState,
  keyPeoplePloc,
  keyPeopleState,
  accountsState,
  accountsPloc,
}: KeyPeopleListProps) {
  interface IDataReset {
    id?: string;
    name: { label: string; value: string | KeyPeople } | string;
    importance?: string;
    role: string;
    email: string;
  }
  const [open, setOpen] = useState(false);
  const [openPopUp, setopenPopUp] = useState(false);
  const [formMode, setFormMode] = useState('create');
  const { accountId } = useParams();
  const [isOnlyBindingKeyPeople, setIsOnlyBindingKeyPeople] = useState(false);
  const [defaultData, setDefaultData] = useState<IDataReset>({
    name: {
      label: '',
      value: '',
    },
    role: '',
    email: '',
  });
  useEffect(() => {
    const accountKeyPeople = () => {
      populateKeyPeople();
    };
    accountKeyPeople();
  }, []);

  useEffect(() => {
    const onChangeState = () => {
      switch (accountKeyPeopleState.kind) {
        case 'BindedAccountKeyPeopleState':
          keyPeopleState.kind === 'CreatedKeyPeopleState'
            ? toastSuccess('Key Person created and bound')
            : toastSuccess('Key Person bound');
          populateKeyPeople();
          break;
        case 'ErrorBindAccountKeyPeopleState':
          toastError(accountKeyPeopleState.error);
          break;
        case 'UnbindedAccountKeyPeopleState':
          toastSuccess('Key Person unbound');
          break;
        case 'ErrorUnbindAccountKeyPeopleState':
          toastError(accountKeyPeopleState.error);
          break;
        case 'UpdatedAccountKeyPeopleState':
          toastSuccess('Key Person updated');
          break;
        case 'ErrorUpdateAccountKeyPeopleState':
          toastError(accountKeyPeopleState.error);
          break;
      }

      if (
        accountKeyPeopleState.kind !== 'LoadedAccountKeyPeopleState' &&
        accountKeyPeopleState.kind !== 'LoadingAccountKeyPeopleState' &&
        accountKeyPeopleState.kind !== 'ErrorAccountKeyPeopleState'
      ) {
        populateKeyPeople();
      }
    };
    onChangeState();
  }, [accountKeyPeopleState]);

  useEffect(() => {
    switch (keyPeopleState.kind) {
      case 'SettedKeyPeopleState':
        !isOnlyBindingKeyPeople && setIsOnlyBindingKeyPeople(true);
        break;
      case 'ErrorKeyPeopleState':
        toastError(keyPeopleState.error);
        break;
    }
  }, [keyPeopleState]);

  const openModalBind = () => {
    keyPeoplePloc.getAll();
    setFormMode('create');
    setDefaultData({
      name: '',
      role: '',
      email: '',
      importance: '',
    });
    setOpen(true);
  };

  const openModalEdit = (keyPeople: KeyPeople) => {
    keyPeoplePloc.setKeyPeople(keyPeople);
    setDefaultData({
      name: {
        label: keyPeople.name,
        value: keyPeople,
      },
      role: keyPeople.role,
      email: keyPeople.email,
      importance: keyPeople.importance,
    });
    setFormMode('edit');
    setOpen(true);
  };

  const handleUnbind = (keyPeople: KeyPeople) => {
    if (
      accountsState.kind === 'SettedAccountState' ||
      accountsState.kind === 'LoadedAccountState' ||
      accountsState.kind === 'CreatedAccountState'
    ) {
      if (keyPeopleState.kind === 'SettedKeyPeopleState') {
        accountKeyPeoplePloc.unbindKeyPeopleFromAccount(
          accountsState.account.id,
          keyPeopleState.keyPeople.id
        );
      }
    }
    setopenPopUp(false);
  };

  const populateKeyPeople = () => {
    if (accountId) {
      accountKeyPeoplePloc.get(accountId);
    }
  };

  const createBindAccountKeyPeople = async (data: any, account: Account) => {
    if (isOnlyBindingKeyPeople) {
      await bindKeyPeopleToAccount(
        accountKeyPeoplePloc,
        account.id,
        data.name.value.id,
        data.importance
      );
    } else {
      const keyPersonId = uuid();
      await createKeyPerson(
        keyPeoplePloc,
        keyPersonId,
        data.name.label,
        data.email,
        data.role
      );
      bindKeyPeopleToAccount(
        accountKeyPeoplePloc,
        account.id,
        keyPersonId,
        data.importance
      );
    }
  };

  const updateAccountKeyPeople = (data: any, account: Account) => {
    accountKeyPeoplePloc.update(account.id, data.name.value.id, {
      notes: data.importance,
    });
  };

  const onSubmit = (data: any) => {
    if (
      accountsState.kind === 'SettedAccountState' ||
      accountsState.kind === 'LoadedAccountState' ||
      accountsState.kind === 'CreatedAccountState'
    ) {
      if (formMode === 'create') {
        createBindAccountKeyPeople(data, accountsState.account);
      } else {
        updateAccountKeyPeople(data, accountsState.account);
      }
    }
  };

  const onDropdownChange = async ({
    label,
    value,
  }: {
    label: string;
    value: any;
  }) => {
    if (keyPeopleState.kind !== 'LoadedKeyPeopleState') {
      return;
    }
    const isKeyPeopleBound = isValueInObjectsArrayProperty(
      label,
      keyPeopleState.keyPeople,
      'name'
    );

    setIsOnlyBindingKeyPeople(isKeyPeopleBound);
    setDefaultData({
      id: value.id,
      name: {
        label: label,
        value: value,
      },
      importance: '',
      role: isKeyPeopleBound ? value.role : '',
      email: isKeyPeopleBound ? value.email : '',
    });
  };

  const handleCancel = (keyPeople: KeyPeople) => {
    keyPeoplePloc.setKeyPeople(keyPeople);
    setopenPopUp(true);
  };

  switch (accountKeyPeopleState.kind) {
    case 'LoadingAccountKeyPeopleState': {
      return <Loader />;
    }
    case 'ErrorAccountKeyPeopleState': {
      return <div>Error</div>;
    }
    case 'LoadedAccountKeyPeopleState': {
      return (
        <StyledKeyPeopleListContainer>
          <StyledSubtitleButton>
            <h3>Accounts Key People</h3>
            <Button text="Add Key People" onClick={openModalBind} />
            <Modal
              title="Add Key People"
              isVisible={open}
              closeModal={setOpen}
              position="right"
              children={
                <KeyPeopleForm
                  keyPeopleState={keyPeopleState}
                  handleCancel={() => setOpen(false)}
                  handleSave={() => setOpen(false)}
                  accountKeyPeopleState={accountKeyPeopleState}
                  formMode={formMode === 'create' ? 'create' : 'edit'}
                  onSubmit={onSubmit}
                  isOnlyBindingKeyPeople={isOnlyBindingKeyPeople}
                  onDropdownChange={onDropdownChange}
                  defaultData={defaultData}
                />
              }
            />
          </StyledSubtitleButton>
          <DataTable
            columns={getKeyPeopleListColumns({
              pencilClick: openModalEdit,
              linkIconClick: handleCancel,
            })}
            pagination={true}
            postsPerPage={4}
            pagesLimit={3}
            items={accountKeyPeopleState.accountKeyPeople.keyPeople}
            emptyMessage={`There's no Key People yet.`}
          />
          <PopUp
            onClick={handleUnbind}
            isVisible={openPopUp}
            closePopUp={setopenPopUp}
            buttonMessage={'Yes, Unbind'}
            children={
              <>
                <p>Are you sure you want to unbind this key people?</p>
                <br />
                <p>This action won't unbind this person from other accounts.</p>
              </>
            }
          />
        </StyledKeyPeopleListContainer>
      );
    }
    default:
      return <>Cargando ...</>;
  }
}

export default KeyPeopleList;
