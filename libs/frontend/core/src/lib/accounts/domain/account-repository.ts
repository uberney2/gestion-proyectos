import { Either } from '../../common/domain/either';
import { DataError } from '../../common/domain/data-error';
import { Account, AccountId, AccountUpdate } from './account';

export interface AccountRepository {
  getAll(): Promise<Either<DataError, Account[]>>;

  create(account: Account): Promise<Either<DataError, Account>>;

  findOne(param: string): Promise<Either<DataError, Account>>;

  update(
    id: AccountId,
    account: AccountUpdate
  ): Promise<Either<DataError, Account>>;
}
