import { QA } from '../domain';
import { QADto } from './qa-dto';

export function fromDtoToDomain(qaDto: QADto): QA {
  return {
    id: qaDto.id,
    currentStatus: qaDto.currentStatus,
    testTools: qaDto.testTools,
    automationLevel: qaDto.automationLevel,
    manualProcess: qaDto.manualProcess,
    automatedProcess: qaDto.automatedProcess,
    status: qaDto.status,
    observations: qaDto.observations,
  };
}
