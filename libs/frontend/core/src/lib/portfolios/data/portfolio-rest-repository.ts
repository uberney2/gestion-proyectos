import { DataError } from './../../common/domain/data-error';
import { PortfolioDto } from './portfolio-dto';
import { HttpClient } from './../../common/data/http-client';
import { Either } from '../../common/domain/either';
import { Portfolio, PortfolioRepository } from './../domain';
export class PortfolioRestApiRepository implements PortfolioRepository {
  private httpClient: HttpClient;
  private endPoint = 'portfolio';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  getAll(): Promise<Either<DataError, Portfolio[]>> {
    return this.httpClient
      .get<PortfolioDto[]>(this.endPoint)
      .then((data) => Either.right<DataError, Portfolio[]>(data))
      .catch((error) =>
        Either.left<DataError, Portfolio[]>({ kind: 'UnexpectedError', error })
      );
  }
}
