import { Account } from './Account';
import {
  IGenericRepositoryFindAll,
  IGenericRepositoryInsert,
} from '../../Shared/domain/generic-repository';
import { AccountWithKeyPeople } from './AccountWithKeyPeople';
import { IGenericRepositoryFindByParam } from '../../Shared/domain/generic-repository/IGenericRepositoryFindByParam';
import { IGenericRepositoryUpdate } from '../../Shared/domain/generic-repository/IGenericRepositoryUpdate';
export interface AccountRepository
  extends IGenericRepositoryInsert<Account>,
    IGenericRepositoryFindAll<Account | AccountWithKeyPeople>,
    IGenericRepositoryFindByParam<Account>,
    IGenericRepositoryUpdate<Account> {}
