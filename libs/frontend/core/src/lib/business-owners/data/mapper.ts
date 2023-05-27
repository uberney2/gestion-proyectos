import { BuOwner } from '../domain';
import { BuOwnerDto } from './bu-owner-dto';
export function fromDtoToDomain(buOwnerDto: BuOwnerDto): BuOwner {
  return {
    id: buOwnerDto.id,
    name: buOwnerDto.name,
    createdAt: buOwnerDto.createdAt,
    updatedAt: buOwnerDto.updatedAt,
  };
}
