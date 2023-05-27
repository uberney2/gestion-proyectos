import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { KeyPeople } from '../key-people';
import { KeyPeopleRepository } from '../key-people-repository';

export class GetAllKeyPeopleUseCase {
  private keyPeopleRepository;
  constructor(keyPeopleRepository: KeyPeopleRepository) {
    this.keyPeopleRepository = keyPeopleRepository;
  }

  execute(): Promise<Either<DataError, KeyPeople[]>> {
    return this.keyPeopleRepository.getAll();
  }
}
