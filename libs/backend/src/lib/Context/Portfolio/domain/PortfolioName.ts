import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class PortfolioName extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsDefined(value);
  }
}
