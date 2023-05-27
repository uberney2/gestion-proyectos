import { Status } from '../../common';
import { AccountabilityLevelEnum } from '../domain';

export interface ProcessDto {
  id: string;
  observations?: string;
  status?: Status;
  stack?: string;
  methodology?: string;
  frequencyToDeploy?: string;
  latamInfluence?: string;
  accountabilityLevel?: AccountabilityLevelEnum;
}
