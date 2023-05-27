import { TeamComposition } from '../../../../Teams';
import { MotherCreator } from '../MotherCreator';

export class TeamCompositionMother {
  static random() {
    return this.create(MotherCreator.random().lorem.paragraph());
  }

  static create(name: string): TeamComposition {
    return new TeamComposition(name);
  }
}
