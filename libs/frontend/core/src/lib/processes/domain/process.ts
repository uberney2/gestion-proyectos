import { DimensionBaseEntity, BaseEntity } from './../../common/domain';
export enum AccountabilityLevelEnum {
  RESPONSIBLE_100 = 'Responsible 100%',
  BASED_ON_OUR_DEFINITION = 'Based on our definition',
  SHARED_RESPONSIBILITY = 'Shared Responsibility',
  BASED_ON_CLIENT = 'Based on Client',
  STAFF_AUMENTATION = 'Staff Aumentation',
}
export type ProcessId = string;
type Stack = string;
type Methodology = string;
type FrequencyToDeploy = string;
type LatamInfluence = string;

export interface Process extends DimensionBaseEntity, BaseEntity {
  id: ProcessId;
  stack?: Stack;
  methodology?: Methodology;
  frequencyToDeploy?: FrequencyToDeploy;
  latamInfluence?: LatamInfluence;
  accountabilityLevel?: AccountabilityLevelEnum;
}
