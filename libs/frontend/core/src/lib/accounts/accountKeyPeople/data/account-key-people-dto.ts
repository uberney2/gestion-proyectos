import { KeyPeopleDto } from '../../data/accounts-dto';

export interface AccountKeyPeopleDto {
  id: string;
  keyPeople: KeyPeopleDto[];
}

export interface BindKeyPeopleBody {
  notes: string;
}
