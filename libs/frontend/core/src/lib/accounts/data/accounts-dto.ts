import { BuOwnerDto } from '../../business-owners/data/bu-owner-dto';
import { PortfolioDto } from '../../portfolios/data/portfolio-dto';

export interface KeyPeopleDto {
  id: string;
  createdAt: string;
  email: string;
  note: string;
  name: string;
  role: string;
  status: string;
  updateAt: string;
}

export interface AccountsDto {
  id: string;
  name: string;
  buOwner: BuOwnerDto;
  portfolio: PortfolioDto;
  status?: string;
  keyPeople: KeyPeopleDto[];
  createdAt: string;
  updatedAt: string;
  salesforceLink?: string;
  pcsLink?: string;
  strategy?: string;
}

export interface AccountDto {
  id: string;
  name: string;
  buOwner: BuOwnerDto;
  portfolio: PortfolioDto;
  status?: string;
  salesforceLink?: string;
  pcsLink?: string;
  strategy?: string;
}

export interface StatusResponse {
  status: number;
}
