import {
  ProcessCreator,
  ProcessUpdater,
  ProcessFinder,
} from '@delia/backend/process';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../project.repository.proxy';
import { ProcessRepository } from './process.repository.proxy';

@Injectable()
export class ProcessCreatorInjectable extends ProcessCreator {
  constructor(
    processRepository: ProcessRepository,
    projectRepository: ProjectRepository
  ) {
    super(processRepository, projectRepository);
  }
}

@Injectable()
export class ProcessUpdaterInjectable extends ProcessUpdater {
  constructor(
    processRepository: ProcessRepository,
    projectRepository: ProjectRepository
  ) {
    super(projectRepository, processRepository);
  }
}
@Injectable()
export class ProcessFinderInjectable extends ProcessFinder {
  constructor(
    processRepository: ProcessRepository,
    projectRepository: ProjectRepository
  ) {
    super(processRepository, projectRepository);
  }
}
