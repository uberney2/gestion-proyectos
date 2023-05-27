import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { infrastructure } from '@delia/backend/portfolio';
import { PortfolioController } from './portfolio.controller';
import { PortfolioFinderAllInjectable } from './portfolio.application.proxy';
import { PortfolioRepository } from './portfolio.repository.proxy';

const { PortfolioEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([PortfolioEntity])],
  controllers: [PortfolioController],
  providers: [PortfolioFinderAllInjectable, PortfolioRepository],
})
export class PortfolioModule {}
