import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { Portfolio } from './portfolio';

export interface PortfolioRepository {
  getAll(): Promise<Either<DataError, Portfolio[]>>;
}
