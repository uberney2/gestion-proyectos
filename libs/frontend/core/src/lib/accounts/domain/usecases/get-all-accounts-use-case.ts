import { AccountRepository } from '../account-repository';
import { Either } from '../../../common/domain/either';
import { DataError } from '../../../common/domain/data-error';
import { Account } from '../account';

export class GetAllAccountsUseCase {
  private accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(): Promise<Either<DataError, Account[]>> {
    return this.accountRepository.getAll();
  }
}
