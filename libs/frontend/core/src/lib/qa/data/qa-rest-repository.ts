import { HttpClient } from '../../common';
import { handleDataError } from '../../common/data/error-handler';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { QA } from '../domain';
import { QARepository } from '../domain/qa-repository';
import { fromDtoToDomain } from './mapper';
import { QADto } from './qa-dto';

export class QARestRepository implements QARepository {
  private httpClient: HttpClient;
  private endPoint = 'project';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(idProject: ProjectId, qa: QA): Promise<Either<DataError, QA>> {
    return this.httpClient
      .post<QA, QA>(`${this.endPoint}/${idProject}/qa`, qa)
      .then(() => Either.right<DataError, QA>(qa))
      .catch((axiosError) => handleDataError(axiosError));
  }

  update(
    projectId: string,
    qaId: string,
    qa: QA
  ): Promise<Either<DataError, QA>> {
    return this.httpClient
      .put<QA, QADto>(`${this.endPoint}/${projectId}/qa/${qaId}`, qa)
      .then((qa) => Either.right<DataError, QA>(fromDtoToDomain(qa)))
      .catch((axiosError) => handleDataError(axiosError));
  }

  findOne(projectId: ProjectId): Promise<Either<DataError, QA>> {
    return this.httpClient
      .get<QADto>(`${this.endPoint}/${projectId}/qa`)
      .then((qa) => Either.right<DataError, QA>(fromDtoToDomain(qa)))
      .catch((axiosError) => handleDataError(axiosError));
  }
}
