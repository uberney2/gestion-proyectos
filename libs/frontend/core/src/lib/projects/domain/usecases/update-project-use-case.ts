import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { ProjectRepository } from '../project-repository';
import { Project, ProjectId } from '../projects';

export class UpdateProjectUseCase {
  private projectRepository: ProjectRepository;
  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }
  execute(
    id: ProjectId,
    project: Project
  ): Promise<Either<DataError, Project>> {
    return this.projectRepository.update(id, project);
  }
}
