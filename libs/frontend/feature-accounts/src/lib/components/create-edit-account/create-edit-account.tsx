import {
  StyledAccountsContainer,
  StyledAccountsSubTitle,
  StyledAccountsTitle,
} from './create-edit-account.styles';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import '../../../../../../../apps/frontend/src/assets/react-tabs.css';
import AccountsForm from '../accounts-form/accounts-form';
import KeyPeopleList from '../key-people-list/key-people-list';
import {
  Breadcrumb,
  ChevronRightIcon,
  toastError,
  toastSuccess,
  PopUp,
} from '@delia/ui-shared';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  AccountsPloc,
  AccountsState,
  BuOwnerPloc,
  BuOwnersState,
  PortfoliosState,
  PortfolioPloc,
  AccountKeyPeoplePloc,
  AccountKeyPeopleState,
  ProjectsPloc,
  ProjectsState,
} from '@delia/frontend/core';
import { useEffect, useState } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  KeyPeoplePloc,
  KeyPeopleState,
} from 'libs/frontend/core/src/lib/key-people';
import ProjectList from '../project-list/project-list';

type Mode = 'create' | 'edit';
export interface CreateEditAccountProps {
  formMode: Mode;
  buOwnerPloc: BuOwnerPloc;
  buOwnersState: BuOwnersState;
  accountsPloc: AccountsPloc;
  accountsState: AccountsState;
  portfoliosPloc: PortfolioPloc;
  portfoliosState: PortfoliosState;
  accountKeyPeoplePloc: AccountKeyPeoplePloc;
  accountKeyPeopleState: AccountKeyPeopleState;
  keyPeoplePloc: KeyPeoplePloc;
  keyPeopleState: KeyPeopleState;
  projectPloc: ProjectsPloc;
  projectState: ProjectsState;
}

export function CreateEditAccount({
  formMode,
  buOwnerPloc,
  buOwnersState,
  accountsPloc,
  accountsState,
  portfoliosPloc,
  portfoliosState,
  projectPloc,
  projectState,
  accountKeyPeoplePloc,
  accountKeyPeopleState,
  keyPeoplePloc,
  keyPeopleState,
}: CreateEditAccountProps) {
  const navigate = useNavigate();
  const { accountId } = useParams();
  const [open, setOpen] = useState(false);

  const setAccountState = () => {
    if (accountId) accountsPloc.findOne(accountId);
  };

  useEffect(() => {
    setAccountState();
  }, []);

  useEffect(() => {
    switch (accountsState.kind) {
      case 'ErrorCreateAccountState':
        toastError(accountsState.error);
        break;
      case 'ErrorUpdateAccountState':
        toastError(accountsState.error);
        break;
      case 'CreatedAccountState':
        toastSuccess('Account created');
        break;
      case 'UpdatedAccountState':
        toastSuccess('Account edited');
        break;
      default:
        break;
    }
  }, [accountsState]);
  const accountProcessLabel =
    formMode === 'create' ? 'New Account' : 'Edit Account';

  const handleCancel = () => {
    setOpen(true);
  };

  const accountTabs =
    formMode === 'create' ? 'react-tabs__tab-panel' : 'react-tabs__tab';

  return (
    <StyledAccountsContainer>
      <Breadcrumb separator={<ChevronRightIcon />}>
        <Link to={'/dashboard/accounts'}>Accounts</Link>
        <Link to={''}>{accountProcessLabel}</Link>
      </Breadcrumb>
      <StyledAccountsTitle>{accountProcessLabel}</StyledAccountsTitle>
      <Tabs selectedTabClassName="react-tabs__tab--selected">
        <TabList>
          <Tab> Details</Tab>
          <Tab className={accountTabs}>Key People</Tab>
          <Tab className={accountTabs}>Projects</Tab>
        </TabList>
        <TabPanel>
          <StyledAccountsSubTitle>Account Details</StyledAccountsSubTitle>
          <AccountsForm
            formMode={formMode}
            handleCancel={handleCancel}
            buOwnerPloc={buOwnerPloc}
            buOwnersState={buOwnersState}
            accountsPloc={accountsPloc}
            accountsState={accountsState}
            portfoliosPloc={portfoliosPloc}
            portfoliosState={portfoliosState}
          />
          <PopUp
            onClick={() => navigate('/dashboard/accounts')}
            isVisible={open}
            closePopUp={setOpen}
            buttonMessage={'Yes, Cancel'}
            children={
              <>
                <p>
                  Are you sure you want to cancel the creation of this process?
                </p>
                <br />
                <p>All the information currently filled will be lost.</p>
              </>
            }
          />
        </TabPanel>
        <TabPanel>
          <KeyPeopleList
            keyPeoplePloc={keyPeoplePloc}
            keyPeopleState={keyPeopleState}
            accountKeyPeoplePloc={accountKeyPeoplePloc}
            accountKeyPeopleState={accountKeyPeopleState}
            accountsPloc={accountsPloc}
            accountsState={accountsState}
          />
        </TabPanel>
        <TabPanel>
          <ProjectList ploc={projectPloc} state={projectState} />
        </TabPanel>
      </Tabs>
    </StyledAccountsContainer>
  );
}

export default CreateEditAccount;
