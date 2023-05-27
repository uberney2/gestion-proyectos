import { BaseEntity } from './../../common/domain';
type PortfolioId = string;
type Name = string;

export interface Portfolio extends BaseEntity {
  id: PortfolioId;
  name: Name;
}
