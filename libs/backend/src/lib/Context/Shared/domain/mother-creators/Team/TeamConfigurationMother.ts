import { TeamConfiguration } from '../../../../Teams';
import { MotherCreator } from '../MotherCreator';

export class TeamConfigurationMother {
  static random() {
    return this.create(MotherCreator.random().lorem.paragraph());
  }

  static create(name: string): TeamConfiguration {
    return new TeamConfiguration(name);
  }
}
