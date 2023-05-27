import { DataError } from '../../common/domain/data-error';
import { TeamsErrorsKind, teamsInitialState, TeamsState } from './team-state';
import { Ploc } from '../../common/presentation';
import {
  Team,
  TeamId,
  CreateTeamUseCase,
  UpdateTeamUseCase,
  FindOneTeamUseCase,
} from '../domain';
import { ProjectId } from '../../projects';

export class TeamsPloc extends Ploc<TeamsState> {
  constructor(
    private createTeamUseCase: CreateTeamUseCase,
    private updateTeamUseCase: UpdateTeamUseCase,
    private findOneTeamUseCase: FindOneTeamUseCase
  ) {
    super(teamsInitialState);
  }

  async create(projectId: ProjectId, team: Team) {
    this.changeState({ kind: 'CreatingTeamState' });
    const createdTeam = await this.createTeamUseCase.execute(projectId, team);
    createdTeam.fold(
      (error) => {
        this.changeState(
          this.handleError('ErrorCreateTeamState', error, undefined)
        );
      },
      (team) => this.changeState({ kind: 'CreatedTeamState', team })
    );
  }

  getAll() {
    this.changeState({ kind: 'LoadingTeamsState' });
  }

  async findOne(projectId: ProjectId): Promise<Team | undefined> {
    this.changeState({ kind: 'LoadingTeamsState' });
    const findResult = await this.findOneTeamUseCase.execute(projectId);
    let teamResult;
    findResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorLoadTeamsState', error, undefined)
        ),
      (team) => {
        this.changeState({ kind: 'LoadedTeamState', team });
        teamResult = team;
      }
    );
    return teamResult;
  }

  async update(
    projectId: ProjectId,
    teamId: TeamId,
    team: Team,
    lastTeam: Team
  ) {
    this.changeState({ kind: 'UpdatingTeamState' });
    const updatedTeam = await this.updateTeamUseCase.execute(
      projectId,
      teamId,
      team
    );
    updatedTeam.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorUpdateTeamState', error, lastTeam)
        ),
      (team) => this.changeState({ kind: 'UpdatedTeamState', team })
    );
  }

  private handleError(
    kind: TeamsErrorsKind,
    error: DataError,
    lastTeam: Team | undefined
  ): TeamsState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: kind,
          error: 'Sorry, an error has occurred. Please try again later',
        };
      }
      default: {
        return {
          kind: kind,
          error: error.error.message,
          lastTeam,
        };
      }
    }
  }
}
