import { Injectable } from '@nestjs/common';
import { PortfolioFinderAll } from '@delia/backend/portfolio';
import { PortfolioRepository } from './portfolio.repository.proxy';

@Injectable()
export class PortfolioFinderAllInjectable extends PortfolioFinderAll {
  constructor(portfolioRepository: PortfolioRepository) {
    super(portfolioRepository);
  }
}
