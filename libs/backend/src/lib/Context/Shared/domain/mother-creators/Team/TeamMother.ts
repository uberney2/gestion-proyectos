import { ProjectId } from '../../../../Projects/domain';
import {
  Team,
  TeamComposition,
  TeamConfiguration,
  TeamDeployDate,
  TeamEnglishLevel,
  TeamId,
  TeamPrimitiveType,
} from '../../../../Teams';
import { DimensionObservations } from '../../dimension/DimensionObservations';
import { DimensionStatus } from '../../dimension/DimensionStatus';
import { DimensionObservationsMother } from '../Dimension/DimensionObservationsMother';
import { DimensionStatusMother } from '../Dimension/DimensionStatusMother';
import { TeamCompositionMother } from './TeamCompositionMother';
import { TeamConfigurationMother } from './TeamConfigurationMother';
import { TeamDeployDateMother } from './TeamDeployDateMother';
import { TeamEnglishLevelMother } from './TeamEnglishLevelMother';
import { TeamIdMother } from './TeamIdMother';

export class TeamMother {
  static create(
    id: TeamId,
    projectId: ProjectId,
    composition: TeamComposition,
    teamConfiguration: TeamConfiguration,
    englishLevel: TeamEnglishLevel,
    deployDate: TeamDeployDate,
    status: DimensionStatus,
    observations: DimensionObservations
  ): Team {
    return new Team(
      id,
      projectId,
      composition,
      teamConfiguration,
      englishLevel,
      deployDate,
      status,
      observations
    );
  }

  static fromRequest(request: TeamPrimitiveType) {
    return Team.fromPrimitives(request);
  }

  static random(): Team {
    return this.create(
      TeamIdMother.random(),
      TeamIdMother.random(),
      TeamCompositionMother.random(),
      TeamConfigurationMother.random(),
      TeamEnglishLevelMother.random(),
      TeamDeployDateMother.random(),
      DimensionStatusMother.random(),
      DimensionObservationsMother.random()
    );
  }
}
