import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { ProjectRepository } from '../project-repository';
import { Project } from '../projects';

export class GetAllProjectsWithDimensionsUseCase {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  execute(): Promise<Either<DataError, Project[]>> {
    return this.projectRepository.getAllWithDimension();
  }
}
