import { HttpClient } from '../../common';
import { handleDataError } from '../../common/data/error-handler';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { KeyPeople } from '../domain/key-people';
import { KeyPeopleRepository } from '../domain/key-people-repository';
import { KeyPeopleDto } from './key-people-dto';
import { fromDtoToDomain } from './mapper';

export class KeyPeopleRestRepository implements KeyPeopleRepository {
  private httpClient: HttpClient;
  private endpoint = 'KeyPeople';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(keyPeople: KeyPeople): Promise<Either<DataError, null>> {
    return this.httpClient
      .post<KeyPeople, null>(this.endpoint, keyPeople)
      .then(() => {
        return Either.right<DataError, null>(null);
      })
      .catch((axiosError) => handleDataError(axiosError));
  }

  getAll(): Promise<Either<DataError, KeyPeople[]>> {
    return this.httpClient
      .get<KeyPeopleDto[]>(this.endpoint)
      .then((data) => {
        return Either.right<DataError, KeyPeople[]>(data.map(fromDtoToDomain));
      })
      .catch((error) =>
        Either.left<DataError, KeyPeople[]>({ kind: 'UnexpectedError', error })
      );
  }
}
