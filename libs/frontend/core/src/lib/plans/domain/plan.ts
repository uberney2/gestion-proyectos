import { BaseEntity, DimensionBaseEntity } from './../../common/domain';
export type PlanId = string;
type BacklogResponsible = string;
type RoadMap = string;
type Deliverables = string;

export interface Plan extends DimensionBaseEntity, BaseEntity {
  id: PlanId;
  backlogResponsible?: BacklogResponsible;
  roadMap?: RoadMap;
  deliverables?: Deliverables;
}
