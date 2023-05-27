import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { infrastructure } from '@delia/backend/portfolio';
import { PortfolioCreatorInjectable } from './portfolio.application.proxy';
import { PortfolioRepositoryInjectable } from './portfolio.repository.proxy';

const { PortfolioEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([PortfolioEntity])],
  providers: [PortfolioCreatorInjectable, PortfolioRepositoryInjectable],
  exports: [PortfolioCreatorInjectable],
})
export class PortfolioModule {}
