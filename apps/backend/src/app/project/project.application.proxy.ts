import {
  ProjectCreator,
  ProjectUpdater,
  ProjectFinderByParam,
  ProjectFinderAll,
  ProjectFInderByAccountId,
} from '@delia/backend/project';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository.proxy';

@Injectable()
export class ProjectCreatorInjectable extends ProjectCreator {
  constructor(projectRepository: ProjectRepository) {
    super(projectRepository);
  }
}

@Injectable()
export class ProjectUpdaterInjectable extends ProjectUpdater {
  constructor(projectRepository: ProjectRepository) {
    super(projectRepository);
  }
}

@Injectable()
export class ProjectFinderByParamInjectable extends ProjectFinderByParam {
  constructor(projectRepository: ProjectRepository) {
    super(projectRepository);
  }
}

@Injectable()
export class ProjectFinderAllInjectable extends ProjectFinderAll {
  constructor(projectRepository: ProjectRepository) {
    super(projectRepository);
  }
}

@Injectable()
export class ProjectFinderAllByAccountIdInjectable extends ProjectFInderByAccountId {
  constructor(projectRepository: ProjectRepository) {
    super(projectRepository);
  }
}
