import { Injectable } from '@nestjs/common';
import { PortfolioCreator } from '@delia/backend/portfolio';
import { PortfolioRepositoryInjectable } from './portfolio.repository.proxy';

@Injectable()
export class PortfolioCreatorInjectable extends PortfolioCreator {
  constructor(repository: PortfolioRepositoryInjectable) {
    super(repository);
  }
}
