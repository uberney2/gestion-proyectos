import { Outlet } from 'react-router-dom';
import { Header, PerficientIcon, PersonIcon, Toast } from '@delia/ui-shared';
import appRoutes from '../../routes';
import 'react-toastify/dist/ReactToastify.css';

export function DashboardRoutes() {
  const newUser = {
    name: 'Test User',
    avatar: <PersonIcon width={41} />,
  };

  const newItems = [
    {
      itemName: 'Accounts',
      url: appRoutes.ACCOUNTS,
    },
    {
      itemName: 'Pursuits',
      url: appRoutes.PROJECTS,
    },
  ];

  return (
    <>
      <Toast />
      <Header
        user={newUser}
        tool="Delia"
        logo={<PerficientIcon width={135} />}
        items={newItems}
        children
      />
      <Outlet />
    </>
  );
}

export default DashboardRoutes;
