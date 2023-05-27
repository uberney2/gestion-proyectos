import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Project } from '../projects';
import { ProjectRepository } from './../project-repository';
export class CreateProjectUseCase {
  private projectRepository: ProjectRepository;
  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  execute(project: Project): Promise<Either<DataError, Project>> {
    return this.projectRepository.create(project);
  }
}
