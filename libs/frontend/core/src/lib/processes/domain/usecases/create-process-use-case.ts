import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Process } from '../process';
import { ProcessRepository } from '../process-repository';

export class CreateProcessUseCase {
  private processRepository: ProcessRepository;

  constructor(processRepository: ProcessRepository) {
    this.processRepository = processRepository;
  }

  execute(
    idProject: string,
    process: Process
  ): Promise<Either<DataError, Process>> {
    return this.processRepository.create(idProject, process);
  }
}
