import { Portfolio } from '../domain';
import { PortfolioDto } from './portfolio-dto';
export function fromPortfolioDtoToDomain(
  portfolioDto: PortfolioDto
): Portfolio {
  return {
    id: portfolioDto.id,
    name: portfolioDto.name,
    createdAt: portfolioDto.createdAt,
    updatedAt: portfolioDto.updatedAt,
  };
}
