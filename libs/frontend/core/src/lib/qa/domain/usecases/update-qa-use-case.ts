import { Either } from './../../../common/domain/either';
import { QARepository } from '../qa-repository';
import { DataError } from '../../../common/domain/data-error';
import { QA, QAId } from '../qa';
import { ProjectId } from '../../../projects';

export class UpdateQAUseCase {
  private qaRepository: QARepository;
  constructor(qaRepository: QARepository) {
    this.qaRepository = qaRepository;
  }

  execute(
    projectId: ProjectId,
    qaId: QAId,
    qa: QA
  ): Promise<Either<DataError, QA>> {
    return this.qaRepository.update(projectId, qaId, qa);
  }
}
