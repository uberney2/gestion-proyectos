import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Plan } from '../plan';
import { PlanRepository } from '../plan-repository';

export class FindOnePlanUseCase {
  private planRepository: PlanRepository;
  constructor(planRepository: PlanRepository) {
    this.planRepository = planRepository;
  }

  execute(param: string): Promise<Either<DataError, Plan>> {
    return this.planRepository.findOne(param);
  }
}
