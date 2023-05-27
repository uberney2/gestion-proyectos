import { Plan } from './../../plans/domain/plan';
import { BaseEntity } from './../../common/domain';
import { Process } from '../../processes/domain/process';
import { QA } from '../../qa/domain/qa';
import { Team } from '../../teams/domain/team';
import { Gut } from '../../gut/domain/gut';
import { Account } from '../../accounts';

export enum ContractType {
  TIME_AND_MATERIALS = 'Time & Materials',
  FIXED_FEE = 'Fixed Fee',
}

export enum PursuitsStatus {
  OPEN = 'Open',
  PRE_ANALYSIS = 'Preanalysis',
  ENGINEERING_REVIEW = 'Engineering Review',
  IN_VALIDATION = 'In Validation',
  CANCELLED = 'Cancelled',
}

export enum ProjectsStatus {
  EXECUTION = 'Execution',
  RISK = 'Risk',
  COMPLETED = 'Completed',
  CLOSED = 'Closed',
}

export type ProjectId = string;
type ProjectName = string;
type GmPercentage = string;
type TotalSOW = string;
type UsaPointOfContact = string;
type PursuitStartDate = Date;
type PursuitEndDate = Date;
type StatusChangeDate = Date;
type ResponsibleFromLatam = string[];
type AdditionalBackground = string;
type OnboardingProcess = string;
type ServicesScope = string;
type LevelOfAccount = string;

export interface Project extends BaseEntity {
  id: ProjectId;
  name: ProjectName;
  gmPercentage?: GmPercentage;
  totalSOW?: TotalSOW;
  contractType?: ContractType;
  usaPointOfContact: UsaPointOfContact;
  pursuitStartDate?: PursuitStartDate;
  pursuitEndDate?: PursuitEndDate;
  statusChangeDate: StatusChangeDate;
  status?: PursuitsStatus | ProjectsStatus;
  additionalBackground?: AdditionalBackground;
  onboardingProcess?: OnboardingProcess;
  servicesScope?: ServicesScope;
  levelOfAccount?: LevelOfAccount;
  account?: Account;
  responsibleFromLatam: ResponsibleFromLatam;
  team?: Team;
  QA?: QA;
  process?: Process;
  plan?: Plan;
  gut?: Gut;
}
