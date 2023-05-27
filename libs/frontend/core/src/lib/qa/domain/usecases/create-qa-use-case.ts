import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { QA } from '../qa';
import { QARepository } from '../qa-repository';

export class CreateQAUseCase {
  private qaRepository: QARepository;

  constructor(qaRepository: QARepository) {
    this.qaRepository = qaRepository;
  }

  execute(idProject: string, qa: QA): Promise<Either<DataError, QA>> {
    return this.qaRepository.create(idProject, qa);
  }
}
