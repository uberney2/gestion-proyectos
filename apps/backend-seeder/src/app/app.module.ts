import { Module } from '@nestjs/common';
import { infrastructure as sharedInfrastructure } from '@delia/backend/shared';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SeederModule } from './seeder/seeder.module';

const { PersistanceModule } = sharedInfrastructure;
@Module({
  imports: [PersistanceModule, PortfolioModule, SeederModule],
  providers: [],
})
export class AppModule {}
