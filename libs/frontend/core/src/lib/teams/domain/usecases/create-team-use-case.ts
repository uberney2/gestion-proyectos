import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { ProjectId } from '../../../projects';
import { Team } from '../team';
import { TeamRepository } from '../team-repository';
export class CreateTeamUseCase {
  private teamRepository: TeamRepository;
  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  execute(projectId: ProjectId, team: Team): Promise<Either<DataError, Team>> {
    return this.teamRepository.create(projectId, team);
  }
}
