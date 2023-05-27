import { Either } from './../../../../common/domain/either';
import { AccountKeyPeopleRepository } from '../account-key-people-repository';
import { DataError } from '../../../../common/domain/data-error';
import { KeyPeopleId } from '../../../../key-people/domain/key-people';
import { AccountId } from '../../../domain';
import { BindKeyPeopleBody } from '../account-key-people';

export class BindKeyPeopleToAccountUseCase {
  private accountKeyPeopleRepository;
  constructor(accountKeyPeopleRepository: AccountKeyPeopleRepository) {
    this.accountKeyPeopleRepository = accountKeyPeopleRepository;
  }

  execute(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    body: BindKeyPeopleBody
  ): Promise<Either<DataError, null>> {
    return this.accountKeyPeopleRepository.bindKeyPeopleToAccount(
      accountId,
      keyPeopleId,
      body
    );
  }
}
