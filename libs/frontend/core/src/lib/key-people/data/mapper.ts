import { KeyPeople } from '../domain/key-people';
import { KeyPeopleDto } from './key-people-dto';

export function fromDtoToDomain(keyPeopleDto: KeyPeopleDto): KeyPeople {
  return {
    id: keyPeopleDto.id,
    name: keyPeopleDto.name,
    email: keyPeopleDto.email,
    importance: keyPeopleDto.importance,
    role: keyPeopleDto.role,
    status: keyPeopleDto.status,
    createdAt: keyPeopleDto.createdAt,
    updatedAt: keyPeopleDto.updatedAt,
  };
}
