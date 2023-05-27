import { Module } from '@nestjs/common';
import { BuOwnerModule } from '../bu-owner/bu-owner.module';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [PortfolioModule, BuOwnerModule],
  providers: [SeederService],
})
export class SeederModule {}
