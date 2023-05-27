import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { Team, TeamId } from './team';

export interface TeamRepository {
  create(projectId: ProjectId, team: Team): Promise<Either<DataError, Team>>;
  update(
    projectId: ProjectId,
    teamId: TeamId,
    team: Team
  ): Promise<Either<DataError, Team>>;
  findOne(projectId: ProjectId): Promise<Either<DataError, Team>>;
}
