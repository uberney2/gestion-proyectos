import { DataError } from './../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { PortfolioRepository } from './../portfolio-repository';
import { Portfolio } from '../portfolio';
export class GetAllPortfoliosUseCase {
  private portfolioRepository: PortfolioRepository;

  constructor(portfolioRepository: PortfolioRepository) {
    this.portfolioRepository = portfolioRepository;
  }

  execute(): Promise<Either<DataError, Portfolio[]>> {
    return this.portfolioRepository.getAll();
  }
}
