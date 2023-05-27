import { Project } from '../domain/Project';
import { ProjectRepository } from '../domain/ProjectRepository';

export class ProjectFinderAll {
  constructor(private projectRepository: ProjectRepository) {}

  async run(hasDimensions = false): Promise<Project[]> {
    return hasDimensions
      ? await this.projectRepository.findAllWithDimensions()
      : await this.projectRepository.findAll();
  }
}
