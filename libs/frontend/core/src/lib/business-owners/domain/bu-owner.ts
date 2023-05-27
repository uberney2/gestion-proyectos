import { BaseEntity } from './../../common/domain';
type BuOwnerId = string;
type Name = string;

export interface BuOwner extends BaseEntity {
  id: BuOwnerId;
  name: Name;
}
