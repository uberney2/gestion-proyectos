import { ProjectId } from '../../projects';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';
import { Plan, PlanId } from './plan';

export interface PlanRepository {
  create(projectId: ProjectId, plan: Plan): Promise<Either<DataError, null>>;
  update(
    projectId: ProjectId,
    planId: PlanId,
    plan: Plan
  ): Promise<Either<DataError, Plan>>;
  findOne(projectId: ProjectId): Promise<Either<DataError, Plan>>;
}
