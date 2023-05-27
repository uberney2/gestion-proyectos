import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Account } from '../account';
import { AccountRepository } from '../account-repository';

export class FindOneAccountUseCase {
  private accountRepository;
  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  execute(param: string): Promise<Either<DataError, Account>> {
    return this.accountRepository.findOne(param);
  }
}
