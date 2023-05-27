import { infrastructure } from '@delia/backend/accounts-key-people';

const { AccountKeyPeopleTypeOrmRepository } = infrastructure;

export class AccountKeyPeopleRepository extends AccountKeyPeopleTypeOrmRepository {}
