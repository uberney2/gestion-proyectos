import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { QA } from '../qa';
import { QARepository } from '../qa-repository';

export class FindOneQAUseCase {
  private qaRepository;
  constructor(qaRepository: QARepository) {
    this.qaRepository = qaRepository;
  }

  execute(param: string): Promise<Either<DataError, QA>> {
    return this.qaRepository.findOne(param);
  }
}
