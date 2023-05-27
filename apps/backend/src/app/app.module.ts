import { Module } from '@nestjs/common';
import { infrastructure as sharedInfrastructure } from '@delia/backend/shared';
import { KeyPeopleModule } from './key-people/keypeople.module';
import { AccountsModule } from './accounts/account.module';
import { BuOwnerModule } from './bu-owner/bu-owner.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ProjectModule } from './project/project.module';
import { AuthModule } from './login/auth.module';

const { PersistanceModule } = sharedInfrastructure;
@Module({
  imports: [
    PersistanceModule,
    KeyPeopleModule,
    AccountsModule,
    BuOwnerModule,
    PortfolioModule,
    ProjectModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
