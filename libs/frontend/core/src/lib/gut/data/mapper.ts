import { Gut } from '../domain';
import { GutDto } from './gut-dto';

export function FromDtoToDomain(gutDto: GutDto): Gut {
  return {
    id: gutDto.id,
    status: gutDto.status,
    observations: gutDto.observations,
  };
}
