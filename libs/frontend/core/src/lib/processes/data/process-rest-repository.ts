import { HttpClient } from '../../common';
import { handleDataError } from '../../common/data/error-handler';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { Process } from '../domain';
import { ProcessRepository } from '../domain/process-repository';
import { fromDtoToDomain } from './mapper';
import { ProcessDto } from './process-dto';

export class ProcessRestRepository implements ProcessRepository {
  private httpClient: HttpClient;
  private endPoint = 'project';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(
    idProject: ProjectId,
    process: Process
  ): Promise<Either<DataError, Process>> {
    return this.httpClient
      .post<Process, Process>(`${this.endPoint}/${idProject}/process`, process)
      .then(() => Either.right<DataError, Process>(process))
      .catch((axiosError) => handleDataError(axiosError));
  }

  update(
    projectId: string,
    processId: string,
    process: Process
  ): Promise<Either<DataError, Process>> {
    return this.httpClient
      .put<Process, ProcessDto>(
        `${this.endPoint}/${projectId}/process/${processId}`,
        process
      )
      .then((process) =>
        Either.right<DataError, Process>(fromDtoToDomain(process))
      )
      .catch((axiosError) => handleDataError(axiosError));
  }

  findOne(projectId: string): Promise<Either<DataError, Process>> {
    return this.httpClient
      .get<ProcessDto>(`${this.endPoint}/${projectId}/process`)
      .then((process) =>
        Either.right<DataError, Process>(fromDtoToDomain(process))
      )
      .catch((axiosError) => handleDataError(axiosError));
  }
}
