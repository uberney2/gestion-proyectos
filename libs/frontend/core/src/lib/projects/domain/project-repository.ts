import { DataError } from './../../common/domain/data-error';
import { Either } from './../../common/domain/either';
import { Project, ProjectId } from './projects';

export interface ProjectRepository {
  create(project: Project): Promise<Either<DataError, Project>>;
  getAllWithDimension(): Promise<Either<DataError, Project[]>>;
  findByParam(param: string): Promise<Either<DataError, Project>>;
  update(id: ProjectId, project: Project): Promise<Either<DataError, Project>>;
  getAccountProjects(id: string): Promise<Either<DataError, Project[]>>;
}
