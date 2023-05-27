import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../config/environment/environment.service';
import { KeyPeopleEntity } from '../../../KeyPeople/infrastructure';
import { AccountEntity } from '../../../Accounts/infrastructure';
import { AccountKeyPeopleEntity } from '../../../accountKeyPeople/infrastructure/typeorm/AccountKeyPeopleEntity';
import { BuOwnerEntity } from '../../../BuOwner/infrastructure';
import { PortfolioEntity } from '../../../Portfolio/infrastructure';
import { GutEntity } from '../../../Gut';
import { PlanEntity } from '../../../Plans';
import { ProcessEntity } from '../../../Processes';
import { ProjectEntity } from '../../../Projects/infrastructure';
import { QaEntity } from '../../../QA';
import { TeamEntity } from '../../../Teams';

export const getTypeOrmOptions = (
  config: EnvironmentConfigService
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.getDatabaseHost(),
  port: config.getDatabasePort(),
  username: config.getDatabaseUser(),
  password: config.getDatabasePassword(),
  database: config.getDatabaseName(),
  entities: [
    AccountEntity,
    KeyPeopleEntity,
    AccountKeyPeopleEntity,
    BuOwnerEntity,
    PortfolioEntity,
    GutEntity,
    PlanEntity,
    ProcessEntity,
    ProjectEntity,
    QaEntity,
    TeamEntity,
  ],
  synchronize: config.getDatabaseSync(),
});
