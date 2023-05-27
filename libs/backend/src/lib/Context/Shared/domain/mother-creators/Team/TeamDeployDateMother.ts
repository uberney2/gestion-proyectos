import { TeamDeployDate } from '../../../../Teams';
import { DateMother } from '../DatesMother';

export class TeamDeployDateMother {
  static create(value: Date) {
    return new TeamDeployDate(value);
  }

  static random(): TeamDeployDate {
    return this.create(DateMother.randomSoon());
  }
}
