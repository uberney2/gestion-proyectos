import { DataError } from './../../../common/domain/data-error';
import { ProjectId } from '../../../projects';
import { Plan, PlanId } from '../plan';
import { PlanRepository } from '../plan-repository';
import { Either } from '../../../common/domain/either';

export class UpdatePlanUseCase {
  private planRepository: PlanRepository;
  constructor(planRepository: PlanRepository) {
    this.planRepository = planRepository;
  }

  execute(
    projectId: ProjectId,
    planId: PlanId,
    plan: Plan
  ): Promise<Either<DataError, Plan>> {
    return this.planRepository.update(projectId, planId, plan);
  }
}
