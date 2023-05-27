import { DataError } from './../../common/domain/data-error';
import { HttpClient } from '../../common';
import { handleDataError } from '../../common/data/error-handler';
import { Either } from '../../common/domain/either';
import { Project, ProjectId } from '../domain';
import { ProjectRepository } from '../domain/project-repository';
import { fromDtoToDomain } from './mapper';
import { ProjectDto } from './projects-dto';

export class ProjectRestRepository implements ProjectRepository {
  private httpClient: HttpClient;
  private endPoint = 'project';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(project: Project): Promise<Either<DataError, Project>> {
    return this.httpClient
      .post<Project, Project>(this.endPoint, project)
      .then(() => Either.right<DataError, Project>(project))
      .catch((axiosError) => handleDataError(axiosError));
  }

  getAllWithDimension(): Promise<Either<DataError, Project[]>> {
    return this.httpClient
      .get<ProjectDto[]>(`${this.endPoint}?includeDimensions=true`)
      .then((data) => {
        return Either.right<DataError, Project[]>(data.map(fromDtoToDomain));
      })
      .catch((error) =>
        Either.left<DataError, Project[]>({ kind: 'UnexpectedError', error })
      );
  }

  findByParam(param: string): Promise<Either<DataError, Project>> {
    return this.httpClient
      .get<ProjectDto>(`${this.endPoint}/${param}`)
      .then((project) =>
        Either.right<DataError, Project>(fromDtoToDomain(project))
      )
      .catch((axiosError) => handleDataError(axiosError));
  }

  update(id: ProjectId, project: Project): Promise<Either<DataError, Project>> {
    return this.httpClient
      .put<Project, ProjectDto>(`${this.endPoint}/${id}`, project)
      .then((project) =>
        Either.right<DataError, Project>(fromDtoToDomain(project))
      )
      .catch((axiosError) => handleDataError(axiosError));
  }

  getAccountProjects(id: string): Promise<Either<DataError, Project[]>> {
    return this.httpClient
      .get<ProjectDto[]>(`${this.endPoint}/account/${id}`)
      .then((project) => {
        return Either.right<DataError, Project[]>(project.map(fromDtoToDomain));
      })
      .catch((error) =>
        Either.left<DataError, Project[]>({ kind: 'UnexpectedError', error })
      );
  }
}
