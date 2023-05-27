import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { ProjectId } from '../../../projects';
import { Process, ProcessId } from '../process';
import { ProcessRepository } from '../process-repository';

export class UpdateProcessUseCase {
  private processRepository: ProcessRepository;
  constructor(processRepository: ProcessRepository) {
    this.processRepository = processRepository;
  }

  execute(
    projectId: ProjectId,
    processId: ProcessId,
    process: Process
  ): Promise<Either<DataError, Process>> {
    return this.processRepository.update(projectId, processId, process);
  }
}
