import { HttpClient } from '../../common';
import { handleDataError } from '../../common/data/error-handler';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { Gut } from '../domain';
import { GutRepository } from '../domain/gut-repository';
import { GutDto } from './gut-dto';
import { FromDtoToDomain } from './mapper';

export class GutRestRepository implements GutRepository {
  private httpClient: HttpClient;
  private endPoint = 'project';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(idProject: ProjectId, gut: Gut): Promise<Either<DataError, Gut>> {
    return this.httpClient
      .post<Gut, Gut>(`${this.endPoint}/${idProject}/gut`, gut)
      .then(() => Either.right<DataError, Gut>(gut))
      .catch((axiosError) => handleDataError(axiosError));
  }

  update(
    projectId: string,
    gutId: string,
    gut: Gut
  ): Promise<Either<DataError, Gut>> {
    return this.httpClient
      .put<Gut, GutDto>(`${this.endPoint}/${projectId}/gut/${gutId}`, gut)
      .then((gut) => Either.right<DataError, Gut>(FromDtoToDomain(gut)))
      .catch((axiosError) => handleDataError(axiosError));
  }

  findOne(projectId: string): Promise<Either<DataError, Gut>> {
    return this.httpClient
      .get<GutDto>(`${this.endPoint}/${projectId}/gut`)
      .then((gut) => Either.right<DataError, Gut>(FromDtoToDomain(gut)))
      .catch((axiosError) => handleDataError(axiosError));
  }
}
