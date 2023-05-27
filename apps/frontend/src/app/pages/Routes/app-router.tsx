import DashboardRoutes from './dashboard-routes';
import AccountsView from '../accounts/accounts-view';
import NotFoundView from '../not-found/not-found-view';
import ProjectsView from '../projects/projects-view';
import appRoutes from '../../routes';
import { useLocation, useRoutes } from 'react-router-dom';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CreateEditAccount } from '@delia/frontend/feature-accounts';
import { dependencies } from '../../app';
import { usePlocState } from '../../shared/hooks/use-ploc-state';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CreateEditPursuit } from '@delia/frontend/feature-projects';

export function AppRouter() {
  const buOwnersPloc = dependencies.buOwnersPloc;
  const accountsPloc = dependencies.accountsPloc;
  const portfoliosPloc = dependencies.portfoliosPloc;
  const accountKeyPeoplePloc = dependencies.accountKeyPeoplePloc;
  const keyPeoplePloc = dependencies.keyPeoplePloc;
  const plansPloc = dependencies.planPloc;
  const plansState = usePlocState(plansPloc);
  const buOwnersState = usePlocState(buOwnersPloc);
  const accountsState = usePlocState(accountsPloc);
  const portfoliosState = usePlocState(portfoliosPloc);
  const accountKeyPeopleState = usePlocState(accountKeyPeoplePloc);
  const keyPeopleState = usePlocState(keyPeoplePloc);
  const processPloc = dependencies.processPloc;
  const processState = usePlocState(processPloc);
  const projectsPloc = dependencies.projectsPloc;
  const projectsState = usePlocState(projectsPloc);
  const teamsPloc = dependencies.teamsPloc;
  const teamsState = usePlocState(teamsPloc);
  const qaPloc = dependencies.qaPloc;
  const qaState = usePlocState(qaPloc);
  const gutPloc = dependencies.gutPloc;
  const gutState = usePlocState(gutPloc);
  const { pathname } = useLocation();
  const element = useRoutes([
    {
      path: `${appRoutes.DASHBOARD}`,
      element: <DashboardRoutes />,
      children: [
        {
          path: `${appRoutes.PROJECTS}`,
          element: <ProjectsView />,
        },
        {
          path: `${appRoutes.PURSUITSCREATE}`,
          element: (
            <CreateEditPursuit
              accountsPloc={accountsPloc}
              accountsState={accountsState}
              formMode={pathname.includes('create') ? 'create' : 'edit'}
              processPloc={processPloc}
              processState={processState}
              projectsPloc={projectsPloc}
              projectsState={projectsState}
              plansPloc={plansPloc}
              plansState={plansState}
              teamsPloc={teamsPloc}
              teamsState={teamsState}
              qaPloc={qaPloc}
              qaState={qaState}
              gutPloc={gutPloc}
              gutState={gutState}
            />
          ),
        },
        {
          path: `${appRoutes.PURSUITSEDIT}`,
          element: (
            <CreateEditPursuit
              accountsPloc={accountsPloc}
              accountsState={accountsState}
              formMode={pathname.includes('edit') ? 'edit' : 'create'}
              processPloc={processPloc}
              processState={processState}
              projectsPloc={projectsPloc}
              projectsState={projectsState}
              plansPloc={plansPloc}
              plansState={plansState}
              teamsPloc={teamsPloc}
              teamsState={teamsState}
              qaPloc={qaPloc}
              qaState={qaState}
              gutPloc={gutPloc}
              gutState={gutState}
            />
          ),
        },
        {
          path: `${appRoutes.ACCOUNTS}`,
          element: <AccountsView />,
        },
        {
          path: `${appRoutes.ACCOUNTSCREATE}`,
          element: (
            <CreateEditAccount
              formMode={pathname.includes('create') ? 'create' : 'edit'}
              buOwnerPloc={buOwnersPloc}
              buOwnersState={buOwnersState}
              accountsPloc={accountsPloc}
              accountsState={accountsState}
              portfoliosPloc={portfoliosPloc}
              portfoliosState={portfoliosState}
              accountKeyPeoplePloc={accountKeyPeoplePloc}
              accountKeyPeopleState={accountKeyPeopleState}
              keyPeoplePloc={keyPeoplePloc}
              keyPeopleState={keyPeopleState}
              projectPloc={projectsPloc}
              projectState={projectsState}
            />
          ),
        },
        {
          path: `${appRoutes.ACCOUNTSEDIT}`,
          element: (
            <CreateEditAccount
              formMode={pathname.includes('edit') ? 'edit' : 'create'}
              buOwnerPloc={buOwnersPloc}
              buOwnersState={buOwnersState}
              accountsPloc={accountsPloc}
              accountsState={accountsState}
              portfoliosPloc={portfoliosPloc}
              portfoliosState={portfoliosState}
              accountKeyPeoplePloc={accountKeyPeoplePloc}
              accountKeyPeopleState={accountKeyPeopleState}
              keyPeoplePloc={keyPeoplePloc}
              keyPeopleState={keyPeopleState}
              projectPloc={projectsPloc}
              projectState={projectsState}
            />
          ),
        },
      ],
    },
    { path: `${appRoutes.UNKNOWN}`, element: <NotFoundView /> },
  ]);

  return element;
}

export default AppRouter;
