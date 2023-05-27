import { infrastructure } from '@delia/backend/key-people';

const { KeyPeopleTypeOrmRepository } = infrastructure;

export class KeyPeopleRepository extends KeyPeopleTypeOrmRepository {}
