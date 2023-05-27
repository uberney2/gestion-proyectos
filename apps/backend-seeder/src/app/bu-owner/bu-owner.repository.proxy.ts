import { infrastructure } from '@delia/backend/bu-owner';

const { BuOwnerTypeOrmRepository } = infrastructure;

export class BuOwnerRepositoryInjectable extends BuOwnerTypeOrmRepository {}
