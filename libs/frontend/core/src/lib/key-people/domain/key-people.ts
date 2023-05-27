import { BaseEntity } from './../../common/domain/';
type Email = string;
type Importance = string;
export type KeyPeopleId = string;
type Name = string;
type Role = string;
type Status = string;

export interface KeyPeople extends BaseEntity {
  id: KeyPeopleId;
  email: Email;
  importance?: Importance;
  name: Name;
  role: Role;
  status?: Status;
}
