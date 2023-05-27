import { Status } from '../../common';

export interface PlanDto {
  id: string;
  backlogResponsible?: string;
  roadMap?: string;
  deliverables?: string;
  status?: Status;
  observations?: string;
}
