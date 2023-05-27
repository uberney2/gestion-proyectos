import { DimensionStatus } from '../../dimension/DimensionStatus';
import { MotherCreator } from '../MotherCreator';

export class DimensionStatusMother {
  static create(value: string): DimensionStatus {
    return new DimensionStatus(value);
  }

  static random(): DimensionStatus {
    return this.create(
      MotherCreator.random().helpers.arrayElement([
        'Good',
        'Warning',
        'Bad',
        'Not Defined',
      ])
    );
  }
}
