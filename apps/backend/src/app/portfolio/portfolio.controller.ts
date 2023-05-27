import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PortfolioFinderAllInjectable } from './portfolio.application.proxy';
import { Portfolio } from '@delia/backend/portfolio';
import { ShowAllPortfolio } from './dto/show-all-portfolio';

@ApiTags('Portfolio')
@Controller('portfolio')
export class PortfolioController {
  constructor(private portfolioFinderAll: PortfolioFinderAllInjectable) {}

  @Get()
  async findAll(): Promise<ShowAllPortfolio[]> {
    const response = await this.portfolioFinderAll.run();
    return this.createShowPortfoliosResponse(response);
  }

  private createShowPortfoliosResponse(
    response: Array<Portfolio>
  ): ShowAllPortfolio[] {
    const newResponse = response.map(this.convertBuPrimitivesToShowAllBuOwner);
    return newResponse;
  }

  private convertBuPrimitivesToShowAllBuOwner(portfolio: Portfolio) {
    return new ShowAllPortfolio(
      portfolio.id.value,
      portfolio.name.value,
      portfolio.createdAt.value,
      portfolio.updatedAt.value
    );
  }
}
