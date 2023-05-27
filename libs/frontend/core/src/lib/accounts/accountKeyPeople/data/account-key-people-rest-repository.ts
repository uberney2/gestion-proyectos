import { HttpClient } from '../../../common';
import { handleDataError } from '../../../common/data/error-handler';
import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { KeyPeopleDto } from '../../data/accounts-dto';
import { fromKeyPeopleDtoToDomain } from '../../data/mapper';
import {
  AccountKeyPeople,
  BindKeyPeopleBody,
  UpdateAccountKeyPeopleBody,
} from '../domain/account-key-people';
import { AccountKeyPeopleRepository } from '../domain/account-key-people-repository';

export class AccountKeyPeopleRestRepository
  implements AccountKeyPeopleRepository
{
  private httpClient: HttpClient;
  private endPoint = 'accounts';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  getAccountKeyPeople(
    accountId: string
  ): Promise<Either<DataError, AccountKeyPeople>> {
    return this.httpClient
      .get<KeyPeopleDto[]>(`${this.endPoint}/${accountId}/keypeople`)
      .then((accountKeyPeople) =>
        Either.right<DataError, AccountKeyPeople>({
          id: accountId,
          keyPeople: accountKeyPeople.map(fromKeyPeopleDtoToDomain),
        })
      )
      .catch((axiosError) => handleDataError(axiosError));
  }

  updateAccountKeyPeople(
    accountId: string,
    keyPeopleId: string,
    body: { notes: string }
  ): Promise<Either<DataError, null>> {
    return this.httpClient
      .patch<UpdateAccountKeyPeopleBody, null>(
        `${this.endPoint}/${accountId}/keypeople/${keyPeopleId}`,
        body
      )
      .then(() => Either.right<DataError, null>(null))
      .catch((axiosError) => handleDataError(axiosError));
  }

  bindKeyPeopleToAccount(
    accountId: string,
    keyPeopleId: string,
    body: { notes: string }
  ): Promise<Either<DataError, null>> {
    return this.httpClient
      .post<BindKeyPeopleBody, null>(
        `${this.endPoint}/${accountId}/keypeople/${keyPeopleId}`,
        body
      )
      .then(() => Either.right<DataError, null>(null))
      .catch((axiosError) => handleDataError(axiosError));
  }

  unbindKeyPeopleFromAccount(
    accountId: string,
    keyPeopleId: string
  ): Promise<Either<DataError, null>> {
    return this.httpClient
      .delete<null>(`${this.endPoint}/${accountId}/keypeople/${keyPeopleId}`)
      .then(() => Either.right<DataError, null>(null))
      .catch((axiosError) => handleDataError(axiosError));
  }
}
