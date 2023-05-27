import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { ProjectId } from '../../../projects';
import { Team, TeamId } from '../team';
import { TeamRepository } from '../team-repository';

export class UpdateTeamUseCase {
  private teamRepository: TeamRepository;
  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  execute(
    projectId: ProjectId,
    teamId: TeamId,
    team: Team
  ): Promise<Either<DataError, Team>> {
    return this.teamRepository.update(projectId, teamId, team);
  }
}
