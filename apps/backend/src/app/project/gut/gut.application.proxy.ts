import { GutCreator, GutUpdater, GutFinder } from '@delia/backend/gut';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../project.repository.proxy';
import { GutRepository } from './gut.repository.proxy';

@Injectable()
export class GutCreatorInjectable extends GutCreator {
  constructor(
    gutRepository: GutRepository,
    projectRepository: ProjectRepository
  ) {
    super(gutRepository, projectRepository);
  }
}

@Injectable()
export class GutUpdaterInjectable extends GutUpdater {
  constructor(
    gutRepository: GutRepository,
    projectRepository: ProjectRepository
  ) {
    super(projectRepository, gutRepository);
  }
}

@Injectable()
export class GutFinderInjectable extends GutFinder {
  constructor(
    gutRepository: GutRepository,
    projectRepository: ProjectRepository
  ) {
    super(gutRepository, projectRepository);
  }
}
