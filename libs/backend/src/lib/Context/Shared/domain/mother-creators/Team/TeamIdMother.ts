import { TeamId } from '../../../../Teams';
import { MotherCreator } from './../MotherCreator';
import { UuidMother } from './../UuidMother';

export class TeamIdMother {
  static create(value: string): TeamId {
    return new TeamId(value);
  }

  static random(): TeamId {
    return this.create(UuidMother.random());
  }

  static invalidId(): TeamId {
    return this.create(MotherCreator.random().random.alphaNumeric(7));
  }
}
