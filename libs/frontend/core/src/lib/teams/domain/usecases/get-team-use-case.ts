import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Team } from '../team';
import { TeamRepository } from '../team-repository';

export class FindOneTeamUseCase {
  private teamRepository: TeamRepository;
  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  execute(param: string): Promise<Either<DataError, Team>> {
    return this.teamRepository.findOne(param);
  }
}
