import { AccountPrimitiveType } from '../../Accounts/domain';

export class ProjectRequest {
  id: string;
  account: AccountPrimitiveType;
  name: string;
  gmPercentage?: string;
  totalSOW?: string;
  contractType?: string;
  usaPointOfContact: string;
  pursuitStartDate?: Date;
  pursuitEndDate?: Date;
  statusChangeDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  responsibleFromLatam: string[];
  status?: string;
  additionalBackground?: string;
  onboardingProcess?: string;
  servicesScope?: string;
  levelOfAccount?: string;
}
