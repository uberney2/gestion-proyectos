import { BaseEntity } from './../../../common/domain';
import { AccountId } from '../..';
import { KeyPeople, KeyPeopleId } from '../../../key-people/domain/key-people';

export type Notes = string;
export interface BindKeyPeopleBody {
  notes: Notes;
}
export interface AccountKeyPeople extends BaseEntity {
  id: AccountId;
  keyPeople: KeyPeople[];
}
export interface BindKeyPeopleAccount {
  idKeyPeople: KeyPeopleId;
  idAccount: AccountId;
  body: BindKeyPeopleBody;
}

export type UpdateAccountKeyPeopleBody = BindKeyPeopleBody;

export type AccountKeyPeopleUpdate = BindKeyPeopleAccount;
