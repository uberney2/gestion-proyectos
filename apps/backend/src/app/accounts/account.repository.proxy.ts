import { infrastructure } from '@delia/backend/accounts';

const { AccountTypeOrmRepository } = infrastructure;

export class AccountRepository extends AccountTypeOrmRepository {}
