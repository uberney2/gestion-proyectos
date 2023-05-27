import { Process } from '../domain';
import { ProcessDto } from './process-dto';

export function fromDtoToDomain(processDto: ProcessDto): Process {
  return {
    id: processDto.id,
    observations: processDto.observations,
    status: processDto.status,
    stack: processDto.stack,
    methodology: processDto.methodology,
    frequencyToDeploy: processDto.frequencyToDeploy,
    latamInfluence: processDto.latamInfluence,
    accountabilityLevel: processDto.accountabilityLevel,
  };
}
