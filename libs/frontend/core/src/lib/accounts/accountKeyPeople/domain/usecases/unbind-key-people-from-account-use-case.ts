import { Either } from '../../../../common/domain/either';
import { AccountKeyPeopleRepository } from '../account-key-people-repository';
import { DataError } from '../../../../common/domain/data-error';
import { KeyPeopleId } from '../../../../key-people/domain/key-people';
import { AccountId } from '../../../domain';

export class UnbindKeyPeopleFromAccountUseCase {
  private accountKeyPeopleRepository;
  constructor(accountKeyPeopleRepository: AccountKeyPeopleRepository) {
    this.accountKeyPeopleRepository = accountKeyPeopleRepository;
  }

  execute(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId
  ): Promise<Either<DataError, null>> {
    return this.accountKeyPeopleRepository.unbindKeyPeopleFromAccount(
      accountId,
      keyPeopleId
    );
  }
}
