import { BuOwnerDto } from './bu-owner-dto';
import { DataError } from '../../common/domain/data-error';
import { HttpClient } from '../../common/data/http-client';
import { Either } from '../../common/domain/either';
import { BuOwner, BuOwnerRepository } from '../domain';
import { fromDtoToDomain } from './mapper';
export class BuOwnerRestApiRepository implements BuOwnerRepository {
  private httpClient: HttpClient;
  private endpoint = 'BuOwner';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAll(): Promise<Either<DataError, BuOwner[]>> {
    return this.httpClient
      .get<BuOwnerDto[]>(this.endpoint)
      .then((data) =>
        Either.right<DataError, BuOwner[]>(data.map(fromDtoToDomain))
      )
      .catch((error) =>
        Either.left<DataError, BuOwner[]>({ kind: 'UnexpectedError', error })
      );
  }
}
