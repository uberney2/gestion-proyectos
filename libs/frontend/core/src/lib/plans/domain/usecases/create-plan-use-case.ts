import { ProjectId } from '../../../projects';
import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Plan } from '../plan';
import { PlanRepository } from '../plan-repository';

export class CreatePlanUseCase {
  private planRepository: PlanRepository;
  constructor(planRepository: PlanRepository) {
    this.planRepository = planRepository;
  }

  execute(projectId: ProjectId, plan: Plan): Promise<Either<DataError, null>> {
    return this.planRepository.create(projectId, plan);
  }
}
