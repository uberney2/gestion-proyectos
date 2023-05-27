import { BaseEntity, DimensionBaseEntity } from '../../common/domain';

export type TeamId = string;
type Composition = string;
type TeamConfiguration = string;
type EnglishLevel = string;
type DeployDate = Date;

export interface Team extends BaseEntity, DimensionBaseEntity {
  id: TeamId;
  composition?: Composition;
  teamConfiguration?: TeamConfiguration;
  englishLevel?: EnglishLevel;
  deployDate?: DeployDate;
}
