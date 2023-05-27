import { infrastructure } from '@delia/backend/portfolio';

const { PortfolioTypeOrmRepository } = infrastructure;

export class PortfolioRepository extends PortfolioTypeOrmRepository {}
