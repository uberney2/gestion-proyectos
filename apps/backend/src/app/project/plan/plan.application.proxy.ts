import { PlanCreator, PlanUpdater, PlanFinder } from '@delia/backend/plan';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../project.repository.proxy';
import { PlanRepository } from './plan.repository.proxy';

@Injectable()
export class PlanCreatorInjectable extends PlanCreator {
  constructor(
    planRepository: PlanRepository,
    projectRepository: ProjectRepository
  ) {
    super(planRepository, projectRepository);
  }
}

@Injectable()
export class PlanUpdaterInjectable extends PlanUpdater {
  constructor(
    planRepository: PlanRepository,
    projectRepository: ProjectRepository
  ) {
    super(projectRepository, planRepository);
  }
}

@Injectable()
export class PlanFinderInjectable extends PlanFinder {
  constructor(
    planRepository: PlanRepository,
    projectRepository: ProjectRepository
  ) {
    super(planRepository, projectRepository);
  }
}
