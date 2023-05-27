import { HttpClient } from '../../common';
import { handleDataError } from '../../common/data/error-handler';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { ProjectId } from '../../projects';
import { Plan } from '../domain/plan';
import { PlanRepository } from '../domain/plan-repository';
import { fromDtoToDomain } from './mapper';
import { PlanDto } from './plan-dto';

export class PlanRestRepository implements PlanRepository {
  private httpClient: HttpClient;
  private endpoint = 'project';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  create(projectId: ProjectId, plan: Plan): Promise<Either<DataError, null>> {
    return this.httpClient
      .post<Plan, null>(`${this.endpoint}/${projectId}/plan`, plan)
      .then(() => {
        return Either.right<DataError, null>(null);
      })
      .catch((axiosError) => handleDataError(axiosError));
  }

  update(
    projectId: string,
    planId: string,
    plan: Plan
  ): Promise<Either<DataError, Plan>> {
    return this.httpClient
      .put<Plan, PlanDto>(`${this.endpoint}/${projectId}/plan/${planId}`, plan)
      .then((plan) => Either.right<DataError, Plan>(fromDtoToDomain(plan)))
      .catch((axiosError) => handleDataError(axiosError));
  }

  findOne(projectId: string): Promise<Either<DataError, Plan>> {
    return this.httpClient
      .get<PlanDto>(`${this.endpoint}/${projectId}/plan`)
      .then((plan) => Either.right<DataError, Plan>(fromDtoToDomain(plan)))
      .catch((axiosError) => handleDataError(axiosError));
  }
}
