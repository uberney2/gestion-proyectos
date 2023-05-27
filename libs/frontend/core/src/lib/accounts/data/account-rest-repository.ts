import {
  Account,
  AccountId,
  AccountRepository,
  AccountUpdate,
} from '../domain';
import { Either } from '../../common/domain/either';
import { DataError } from '../../common/domain/data-error';
import { HttpClient } from '../../common/data/http-client';
import { AccountDto, AccountsDto } from './accounts-dto';
import { fromDtoToDomainGetAll, fromDtoToDomain } from './mapper';
import { handleDataError } from '../../common/data/error-handler';
export class AccountRestRepository implements AccountRepository {
  private httpClient: HttpClient;
  private endPoint = 'accounts';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  getAll(): Promise<Either<DataError, Account[]>> {
    return this.httpClient
      .get<AccountsDto[]>(this.endPoint)
      .then((data) => {
        return Either.right<DataError, Account[]>(
          data.map(fromDtoToDomainGetAll)
        );
      })
      .catch((error) =>
        Either.left<DataError, Account[]>({ kind: 'UnexpectedError', error })
      );
  }

  create(account: Account): Promise<Either<DataError, Account>> {
    return this.httpClient
      .post<Account, null>(this.endPoint, account)
      .then(() => {
        return Either.right<DataError, Account>(account);
      })
      .catch((axiosError) => handleDataError(axiosError));
  }

  findOne(param: string): Promise<Either<DataError, Account>> {
    return this.httpClient
      .get<AccountDto>(`${this.endPoint}/${param}`)
      .then((account) => {
        return Either.right<DataError, Account>(fromDtoToDomain(account));
      })
      .catch((axiosError) => handleDataError(axiosError));
  }

  update(
    id: AccountId,
    account: AccountUpdate
  ): Promise<Either<DataError, Account>> {
    return this.httpClient
      .put<AccountUpdate, AccountDto>(`${this.endPoint}/${id}`, account)
      .then((account) => {
        return Either.right<DataError, Account>(fromDtoToDomain(account));
      })
      .catch((axiosError) => handleDataError(axiosError));
  }
}
