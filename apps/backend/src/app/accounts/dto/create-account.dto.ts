import { Type } from 'class-transformer';
import {
  IsString,
  IsUUID,
  ValidateNested,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IsObject,
  IsNotEmptyObject,
  IsDefined,
} from 'class-validator';

class CreateBuOwnerDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

class CreatePortfolioDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CreateAccountDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateBuOwnerDto)
  buOwner?: CreateBuOwnerDto;

  @IsOptional()
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreatePortfolioDto)
  portfolio?: CreatePortfolioDto;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  status?: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  salesforceLink?: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  pcsLink?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  strategy?: string;
}
