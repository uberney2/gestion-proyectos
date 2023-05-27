import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { KeyPeople } from './key-people';

export interface KeyPeopleRepository {
  getAll(): Promise<Either<DataError, KeyPeople[]>>;
  create(keyPeople: KeyPeople): Promise<Either<DataError, null>>;
}
