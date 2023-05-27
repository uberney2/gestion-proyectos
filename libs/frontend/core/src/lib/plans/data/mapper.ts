import { Plan } from '../domain';
import { PlanDto } from './plan-dto';

export function fromDtoToDomain(planDto: PlanDto): Plan {
  return {
    id: planDto.id,
    backlogResponsible: planDto.backlogResponsible,
    roadMap: planDto.roadMap,
    deliverables: planDto.deliverables,
    status: planDto.status,
    observations: planDto.observations,
  };
}
