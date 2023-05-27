import { Either } from './../../../common/domain/either';
import { DataError } from '../../../common/domain/data-error';
import { Account, AccountId, AccountUpdate } from '../account';
import { AccountRepository } from './../account-repository';
export class UpdateAccountUseCase {
  private accountRepository;
  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(
    id: AccountId,
    account: AccountUpdate
  ): Promise<Either<DataError, Account>> {
    return this.accountRepository.update(id, account);
  }
}
