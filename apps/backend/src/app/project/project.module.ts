import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { infrastructure as projectInfrastructure } from '@delia/backend/project';
import {
  ProjectCreatorInjectable,
  ProjectFinderAllInjectable,
  ProjectFinderByParamInjectable,
  ProjectUpdaterInjectable,
  ProjectFinderAllByAccountIdInjectable,
} from './project.application.proxy';
import { ProjectRepository } from './project.repository.proxy';
import { PlanEntity } from '@delia/backend/plan';
import {
  PlanCreatorInjectable,
  PlanUpdaterInjectable,
  PlanFinderInjectable,
} from './plan/plan.application.proxy';
import { PlanRepository } from './plan/plan.repository.proxy';
import {
  TeamCreatorInjectable,
  TeamFinderInjectable,
  TeamUpdaterInjectable,
} from './team/team.application.proxy';
import { TeamRepository } from './team/team.repository.proxy';
import { TeamEntity } from '@delia/backend/team';
import {
  ProcessCreatorInjectable,
  ProcessFinderInjectable,
  ProcessUpdaterInjectable,
} from './process/process.application.proxy';
import { ProcessRepository } from './process/process.repository.proxy';
import { ProcessEntity } from '@delia/backend/process';
import { QaEntity } from '@delia/backend/qa';
import {
  QACreatorInjectable,
  QAUpdaterInjectable,
  QAFinderInjectable,
} from './qa/qa.application.proxy';
import { QARepository } from './qa/qa.repository.proxy';
import { GutRepository } from './gut/gut.repository.proxy';
import {
  GutCreatorInjectable,
  GutUpdaterInjectable,
  GutFinderInjectable,
} from './gut/gut.application.proxy';
import { GutEntity } from '@delia/backend/gut';

const { ProjectEntity } = projectInfrastructure;

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectEntity,
      TeamEntity,
      PlanEntity,
      ProcessEntity,
      GutEntity,
      QaEntity,
    ]),
  ],
  controllers: [ProjectController],
  providers: [
    ProjectCreatorInjectable,
    ProjectRepository,
    PlanCreatorInjectable,
    PlanUpdaterInjectable,
    PlanRepository,
    ProcessCreatorInjectable,
    ProcessRepository,
    GutCreatorInjectable,
    GutRepository,
    QACreatorInjectable,
    QARepository,
    TeamCreatorInjectable,
    TeamRepository,
    ProjectUpdaterInjectable,
    ProjectFinderByParamInjectable,
    ProjectFinderAllInjectable,
    TeamFinderInjectable,
    TeamUpdaterInjectable,
    ProcessUpdaterInjectable,
    QAUpdaterInjectable,
    GutUpdaterInjectable,
    PlanFinderInjectable,
    ProcessFinderInjectable,
    QAFinderInjectable,
    GutFinderInjectable,
    ProjectFinderAllByAccountIdInjectable,
  ],
})
export class ProjectModule {}
