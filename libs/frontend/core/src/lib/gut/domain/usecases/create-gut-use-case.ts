import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Gut } from '../gut';
import { GutRepository } from '../gut-repository';

export class CreateGutUseCase {
  private gutRepository: GutRepository;

  constructor(gutRepository: GutRepository) {
    this.gutRepository = gutRepository;
  }

  execute(idProject: string, gut: Gut): Promise<Either<DataError, Gut>> {
    return this.gutRepository.create(idProject, gut);
  }
}
