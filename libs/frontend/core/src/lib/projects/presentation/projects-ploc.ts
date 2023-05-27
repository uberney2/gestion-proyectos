import { DataError } from './../../common/domain/data-error';
import {
  CreateProjectUseCase,
  FindProjectByParamUseCase,
  UpdateProjectUseCase,
  GetAllProjectsWithDimensionsUseCase,
  GetAllAccountProjectsUseCase,
  Project,
} from './../domain';
import {
  projectsInitialState,
  ProjectsState,
  ProjectsErrorsKind,
} from './projects-state';
import { Ploc } from '../../common/presentation';

export class ProjectsPloc extends Ploc<ProjectsState> {
  constructor(
    private createProjectUseCase: CreateProjectUseCase,
    private findProjectByParamUseCase: FindProjectByParamUseCase,
    private updateProjectUseCase: UpdateProjectUseCase,
    private getAllProjectsUseCase: GetAllProjectsWithDimensionsUseCase,
    private getAccountProjectsUseCase: GetAllAccountProjectsUseCase
  ) {
    super(projectsInitialState);
  }

  async create(project: Project) {
    this.changeState({ kind: 'CreatingProjectState' });
    const createdProject = await this.createProjectUseCase.execute(project);
    createdProject.fold(
      (error) => {
        this.changeState(this.handleError('ErrorCreateProjectState', error));
      },
      (project) => this.changeState({ kind: 'CreatedProjectState', project })
    );
  }

  async findByParam(param: string) {
    this.changeState({ kind: 'LoadingProjectState' });
    const project = await this.findProjectByParamUseCase.execute(param);
    project.fold(
      (error) =>
        this.changeState(this.handleError('ErrorLoadProjectState', error)),
      (project) => this.changeState({ kind: 'LoadedProjectState', project })
    );
  }

  async getAllWithDimension() {
    this.changeState({ kind: 'LoadingProjectsState' });
    const allProjects = await this.getAllProjectsUseCase.execute();
    allProjects.fold(
      (error) =>
        this.changeState(this.handleError('ErrorLoadProjectsState', error)),
      (projects) => {
        this.changeState({
          kind: 'LoadedProjectsState',
          projects,
        });
      }
    );
  }

  async update(id: string, project: Project) {
    this.changeState({ kind: 'UpdatingProjectState' });
    const updatedProject = await this.updateProjectUseCase.execute(id, project);
    updatedProject.fold(
      (error) =>
        this.changeState(this.handleError('ErrorUpdateProjectState', error)),
      (project) => this.changeState({ kind: 'UpdatedProjectState', project })
    );
  }

  async getAccountProjects(id: string) {
    this.changeState({ kind: 'LoadingProjectsState' });
    const allAccountsProjectsResult =
      await this.getAccountProjectsUseCase.execute(id);
    allAccountsProjectsResult.fold(
      (error) =>
        this.changeState(this.handleError('ErrorLoadProjectsState', error)),
      (projects) => {
        this.changeState({
          kind: 'LoadedProjectsState',
          projects,
        });
      }
    );
  }

  private handleError(
    kind: ProjectsErrorsKind,
    error: DataError
  ): ProjectsState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: kind,
          error: 'Sorry, an error has occurred. Please try again later',
        };
      }
      default: {
        return {
          kind: kind,
          error: error.error.message,
        };
      }
    }
  }
}
