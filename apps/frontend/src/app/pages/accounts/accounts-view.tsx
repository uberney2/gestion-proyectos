// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountsList } from '@delia/frontend/feature-accounts';
import { useNavigate } from 'react-router-dom';
import { dependencies } from '../../app';
import { usePlocState } from '../../shared/hooks/use-ploc-state';
import { v4 as uuid } from 'uuid';

export function AccountsView() {
  const accountId = uuid();
  const navigate = useNavigate();
  const handleNew = () => {
    navigate('create/:accountId'.replace(':accountId', accountId));
  };

  const accountPloc = dependencies.accountsPloc;
  const state = usePlocState(accountPloc);

  return (
    <AccountsList ploc={accountPloc} state={state} handleNew={handleNew} />
  );
}

export default AccountsView;
