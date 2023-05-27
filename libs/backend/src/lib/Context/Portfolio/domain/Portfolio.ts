import { PortfolioCreatedAt } from './PortfolioCreatedAt';
import { PortfolioId } from './PortfolioId';
import { PortfolioName } from './PortfolioName';
import { PortfolioUpdatedAt } from './PortfolioUpdatedAt';

export type PortfolioPrimitiveType = {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Portfolio {
  id: PortfolioId;
  name: PortfolioName;
  createdAt?: PortfolioCreatedAt;
  updatedAt?: PortfolioUpdatedAt;

  constructor(
    id: PortfolioId,
    name: PortfolioName,
    createdAt?: PortfolioCreatedAt,
    updatedAt?: PortfolioUpdatedAt
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromPrimitives(plainData: PortfolioPrimitiveType): Portfolio {
    return new Portfolio(
      new PortfolioId(plainData.id),
      new PortfolioName(plainData.name),
      new PortfolioCreatedAt(plainData.createdAt),
      new PortfolioUpdatedAt(plainData.updatedAt)
    );
  }

  toPrimitives(): PortfolioPrimitiveType {
    return {
      id: this.id.value,
      name: this.name.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
