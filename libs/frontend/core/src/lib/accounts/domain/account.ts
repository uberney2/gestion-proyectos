import { BaseEntity } from './../../common/domain';
import { BuOwner } from '../../business-owners';
import { KeyPeople } from '../../key-people/domain/key-people';
import { Portfolio } from '../../portfolios';

export type AccountId = string;
type Name = string;
type Status = string;
type PcsLink = string;
type SalesForceLink = string;
type Strategy = string;

export interface Account extends BaseEntity {
  id: AccountId;
  buOwner: BuOwner;
  name: Name;
  portfolio: Portfolio;
  status?: Status;
  keyPeople?: KeyPeople[];
  relatedProjects?: unknown[]; // TODO: replace "unknown" with the Project type
  pcsLink?: PcsLink;
  salesforceLink?: SalesForceLink;
  strategy?: Strategy;
}

export type AccountUpdate = Partial<Account>;
