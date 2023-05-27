import { TeamCreator, TeamFinder, TeamUpdater } from '@delia/backend/team';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../project.repository.proxy';
import { TeamRepository } from './team.repository.proxy';

@Injectable()
export class TeamCreatorInjectable extends TeamCreator {
  constructor(
    teamRepository: TeamRepository,
    projectRepository: ProjectRepository
  ) {
    super(teamRepository, projectRepository);
  }
}

@Injectable()
export class TeamFinderInjectable extends TeamFinder {
  constructor(
    teamRepository: TeamRepository,
    projectRepository: ProjectRepository
  ) {
    super(teamRepository, projectRepository);
  }
}

@Injectable()
export class TeamUpdaterInjectable extends TeamUpdater {
  constructor(
    teamRepository: TeamRepository,
    projectRepository: ProjectRepository
  ) {
    super(projectRepository, teamRepository);
  }
}
