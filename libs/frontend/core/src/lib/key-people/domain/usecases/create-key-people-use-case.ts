import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { KeyPeople } from '../key-people';
import { KeyPeopleRepository } from '../key-people-repository';

export class CreateKeyPeopleUseCase {
  private keyPeopleRepository;
  constructor(keyPeopleRepository: KeyPeopleRepository) {
    this.keyPeopleRepository = keyPeopleRepository;
  }

  execute(keyPeople: KeyPeople): Promise<Either<DataError, null>> {
    return this.keyPeopleRepository.create(keyPeople);
  }
}
