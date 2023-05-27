import { Either } from '../../../common/domain/either';
import { DataError } from '../../../common/domain/data-error';
import {
  AccountKeyPeople,
  BindKeyPeopleBody,
  UpdateAccountKeyPeopleBody,
} from './account-key-people';
import { KeyPeopleId } from '../../../key-people/domain/key-people';
import { AccountId } from '../../domain';

export interface AccountKeyPeopleRepository {
  getAccountKeyPeople(
    accountId: string
  ): Promise<Either<DataError, AccountKeyPeople>>;

  updateAccountKeyPeople(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    body: UpdateAccountKeyPeopleBody
  ): Promise<Either<DataError, null>>;

  bindKeyPeopleToAccount(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    body: BindKeyPeopleBody
  ): Promise<Either<DataError, null>>;

  unbindKeyPeopleFromAccount(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId
  ): Promise<Either<DataError, null>>;
}
