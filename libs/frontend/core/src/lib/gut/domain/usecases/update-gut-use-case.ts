import { DataError } from './../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { GutRepository } from './../gut-repository';
import { Gut, GutId } from '../gut';
import { ProjectId } from '../../../projects';
export class UpdateGutUseCase {
  private gutRepository: GutRepository;
  constructor(gutRepository: GutRepository) {
    this.gutRepository = gutRepository;
  }

  execute(
    projectId: ProjectId,
    gutId: GutId,
    gut: Gut
  ): Promise<Either<DataError, Gut>> {
    return this.gutRepository.update(projectId, gutId, gut);
  }
}
