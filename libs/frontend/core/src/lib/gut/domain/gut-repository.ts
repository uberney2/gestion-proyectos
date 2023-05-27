import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { Gut, GutId } from './gut';

export interface GutRepository {
  create(idProject: ProjectId, gut: Gut): Promise<Either<DataError, Gut>>;

  update(
    projectId: ProjectId,
    gutId: GutId,
    gut: Gut
  ): Promise<Either<DataError, Gut>>;

  findOne(param: string): Promise<Either<DataError, Gut>>;
}
