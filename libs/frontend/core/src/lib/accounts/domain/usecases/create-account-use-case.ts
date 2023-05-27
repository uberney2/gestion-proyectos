import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { AccountRepository } from '../account-repository';
import { Account } from '../account';

export class CreateAccountUseCase {
  private accountRepository;
  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(account: Account): Promise<Either<DataError, Account>> {
    return this.accountRepository.create(account);
  }
}
