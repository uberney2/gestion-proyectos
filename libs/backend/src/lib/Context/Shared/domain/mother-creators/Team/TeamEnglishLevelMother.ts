import { TeamEnglishLevel } from '../../../../Teams';
import { MotherCreator } from '../MotherCreator';

export class TeamEnglishLevelMother {
  static random() {
    return this.create(MotherCreator.random().lorem.paragraph());
  }

  static create(name: string): TeamEnglishLevel {
    return new TeamEnglishLevel(name);
  }
}
