import { QACreator, QAUpdater, QAFinder } from '@delia/backend/qa';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../project.repository.proxy';
import { QARepository } from './qa.repository.proxy';

@Injectable()
export class QACreatorInjectable extends QACreator {
  constructor(
    qaRepository: QARepository,
    projectRepository: ProjectRepository
  ) {
    super(qaRepository, projectRepository);
  }
}

@Injectable()
export class QAUpdaterInjectable extends QAUpdater {
  constructor(
    qaRepository: QARepository,
    projectRepository: ProjectRepository
  ) {
    super(projectRepository, qaRepository);
  }
}

@Injectable()
export class QAFinderInjectable extends QAFinder {
  constructor(
    qaRepository: QARepository,
    projectRepository: ProjectRepository
  ) {
    super(qaRepository, projectRepository);
  }
}
