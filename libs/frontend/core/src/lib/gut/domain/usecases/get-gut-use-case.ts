import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Gut } from '../gut';
import { GutRepository } from '../gut-repository';

export class FindOneGutUseCase {
  private gutRepository;
  constructor(gutRepository: GutRepository) {
    this.gutRepository = gutRepository;
  }

  execute(param: string): Promise<Either<DataError, Gut>> {
    return this.gutRepository.findOne(param);
  }
}
