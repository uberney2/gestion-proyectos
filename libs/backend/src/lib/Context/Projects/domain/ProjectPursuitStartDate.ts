import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectPursuitStartDate extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
