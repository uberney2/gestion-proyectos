import { BaseEntity, DimensionBaseEntity } from './../../common/domain/';
export type GutId = string;
export interface Gut extends BaseEntity, DimensionBaseEntity {
  id: GutId;
}
