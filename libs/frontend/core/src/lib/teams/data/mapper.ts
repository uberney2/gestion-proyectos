import { Team } from '../domain';
import { TeamDto } from './teams-dto';

export function fromDtoToDomain(teamDto: TeamDto): Team {
  return {
    id: teamDto.id,
    teamConfiguration: teamDto.teamConfiguration,
    englishLevel: teamDto.englishLevel,
    deployDate:
      (teamDto.deployDate && new Date(teamDto.deployDate)) || undefined,
    status: teamDto.status,
    observations: teamDto.observations,
    composition: teamDto.composition,
  };
}
