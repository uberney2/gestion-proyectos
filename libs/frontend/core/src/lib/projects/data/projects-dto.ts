import { ProjectsStatus } from './../domain/projects';
import { AccountDto } from '../../accounts/data/accounts-dto';
import { ContractType, PursuitsStatus } from '../domain';
import { TeamDto } from '../../teams/data/teams-dto';
import { QADto } from '../../qa/data/qa-dto';
import { ProcessDto } from '../../processes/data/process-dto';
import { PlanDto } from '../../plans/data/plan-dto';
import { GutDto } from '../../gut/data/gut-dto';

export interface ProjectDto {
  id: string;
  name: string;
  account: AccountDto;
  gmPercentage?: string;
  totalSOW?: string;
  contractType?: ContractType;
  usaPointOfContact: string;
  pursuitStartDate?: string;
  pursuitEndDate?: string;
  statusChangeDate: string;
  status?: PursuitsStatus | ProjectsStatus;
  additionalBackground?: string;
  onboardingProcess?: string;
  servicesScope?: string;
  levelOfAccount?: string;
  responsibleFromLatam: string[];
  team: TeamDto;
  qa: QADto;
  process: ProcessDto;
  plan: PlanDto;
  gut: GutDto;
}

export interface StatusResponse {
  status: number;
}
