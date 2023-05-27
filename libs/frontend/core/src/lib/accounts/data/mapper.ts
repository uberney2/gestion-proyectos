import { KeyPeople } from '../../key-people/domain/key-people';
import { Account } from '../domain';
import { AccountsDto, KeyPeopleDto, AccountDto } from './accounts-dto';

export function fromDtoToDomainGetAll(accountDto: AccountsDto): Account {
  return {
    id: accountDto.id,
    buOwner: accountDto.buOwner,
    createdAt: accountDto.createdAt,
    name: accountDto.name,
    portfolio: accountDto.portfolio,
    status: accountDto.status,
    updatedAt: accountDto.updatedAt,
    pcsLink: accountDto.pcsLink,
    salesforceLink: accountDto.salesforceLink,
    strategy: accountDto.strategy,
    keyPeople: accountDto.keyPeople.map(fromKeyPeopleDtoToDomain),
  };
}

export function fromDtoToDomain(accountDto: AccountDto): Account {
  return {
    id: accountDto.id,
    buOwner: accountDto.buOwner,
    name: accountDto.name,
    portfolio: accountDto.portfolio,
    status: accountDto.status,
    strategy: accountDto.strategy,
    pcsLink: accountDto.pcsLink,
    salesforceLink: accountDto.salesforceLink,
  };
}

export function fromKeyPeopleDtoToDomain(
  keyPeopleDto: KeyPeopleDto
): KeyPeople {
  return {
    id: keyPeopleDto.id,
    createdAt: keyPeopleDto.createdAt,
    email: keyPeopleDto.email,
    importance: keyPeopleDto.note,
    name: keyPeopleDto.name,
    role: keyPeopleDto.role,
    status: keyPeopleDto.status,
    updatedAt: keyPeopleDto.updateAt,
  };
}
