import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { QA, QAId } from './qa';

export interface QARepository {
  create(idProject: ProjectId, qa: QA): Promise<Either<DataError, QA>>;
  update(
    projectId: ProjectId,
    qaId: QAId,
    qa: QA
  ): Promise<Either<DataError, QA>>;
  findOne(projectId: ProjectId): Promise<Either<DataError, QA>>;
}
