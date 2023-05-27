import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { Process, ProcessId } from './process';

export interface ProcessRepository {
  create(
    idProject: ProjectId,
    process: Process
  ): Promise<Either<DataError, Process>>;

  update(
    projectId: ProjectId,
    processId: ProcessId,
    process: Process
  ): Promise<Either<DataError, Process>>;

  findOne(projectId: ProjectId): Promise<Either<DataError, Process>>;
}
