import { DataError } from '../../../../common/domain/data-error';
import { Either } from '../../../../common/domain/either';
import { AccountKeyPeople } from '../account-key-people';
import { AccountKeyPeopleRepository } from '../account-key-people-repository';

export class GetAccountKeyPeopleUseCase {
  private accountKeyPeopleRepository;
  constructor(accountKeyPeopleRepository: AccountKeyPeopleRepository) {
    this.accountKeyPeopleRepository = accountKeyPeopleRepository;
  }

  execute(accountId: string): Promise<Either<DataError, AccountKeyPeople>> {
    return this.accountKeyPeopleRepository.getAccountKeyPeople(accountId);
  }
}
