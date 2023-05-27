import { ProjectId } from '../../../../Projects/domain';
import {
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

export class TeamCreatorMother {
  static create(
    id: TeamId,
    projectId: ProjectId,
    composition: TeamComposition,
    teamConfiguration: TeamConfiguration,
    englishLevel: TeamEnglishLevel,
    deployDate: TeamDeployDate,
    status: DimensionStatus,
    observations: DimensionObservations
  ): TeamPrimitiveType {
    return {
      id: id.value,
      projectId: projectId.value,
      composition: composition.value,
      teamConfiguration: teamConfiguration.value,
      englishLevel: englishLevel.value,
      deployDate: deployDate.value,
      status: status.value,
      observations: observations.value,
    };
  }

  static random(): TeamPrimitiveType {
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
