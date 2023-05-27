import { DimensionObservations } from '../../dimension/DimensionObservations';
import { MotherCreator } from '../MotherCreator';

export class DimensionObservationsMother {
  static random() {
    return this.create(MotherCreator.random().lorem.paragraph());
  }

  static create(name: string): DimensionObservations {
    return new DimensionObservations(name);
  }
}
