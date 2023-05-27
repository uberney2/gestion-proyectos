import { HttpClient } from '../../common';
import { handleDataError } from '../../common/data/error-handler';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { Team } from '../domain';
import { TeamRepository } from '../domain/team-repository';
import { fromDtoToDomain } from './mapper';
import { TeamDto } from './teams-dto';

export class TeamRestRepository implements TeamRepository {
  private httpClient: HttpClient;
  private endPoint = 'project';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(projectId: ProjectId, team: Team): Promise<Either<DataError, Team>> {
    return this.httpClient
      .post<Team, Team>(`${this.endPoint}/${projectId}/team`, team)
      .then(() => Either.right<DataError, Team>(team))
      .catch((axiosError) => handleDataError(axiosError));
  }

  update(
    projectId: string,
    teamId: string,
    team: Team
  ): Promise<Either<DataError, Team>> {
    return this.httpClient
      .put<Team, TeamDto>(`${this.endPoint}/${projectId}/team/${teamId}`, team)
      .then((team) => Either.right<DataError, Team>(fromDtoToDomain(team)))
      .catch((axiosError) => handleDataError(axiosError));
  }

  findOne(projectId: string): Promise<Either<DataError, Team>> {
    return this.httpClient
      .get<TeamDto>(`${this.endPoint}/${projectId}/team`)
      .then((team) => Either.right<DataError, Team>(fromDtoToDomain(team)))
      .catch((axiosError) => handleDataError(axiosError));
  }
}
