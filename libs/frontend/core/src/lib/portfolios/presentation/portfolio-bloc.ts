import { DataError } from './../../common/domain/data-error';
import { portfoliosInitialState, PortfoliosState } from './portfolios-state';
import { GetAllPortfoliosUseCase, Portfolio } from '../domain';
import { Ploc } from '../../common/presentation';
export class PortfolioPloc extends Ploc<PortfoliosState> {
  constructor(private getAllPortfoliosUseCase: GetAllPortfoliosUseCase) {
    super(portfoliosInitialState);
  }

  async getAll() {
    const allPortfolios = await this.getAllPortfoliosUseCase.execute();
    let portfoliosResult: Portfolio[] = [];
    allPortfolios.fold(
      (error) => this.changeState(this.handleError(error)),
      (portfolios) => {
        portfoliosResult = portfolios;
        this.changeState({
          kind: 'LoadedPortfoliosState',
          portfolios: portfolios,
        });
      }
    );
    return portfoliosResult;
  }

  private handleError(error: DataError): PortfoliosState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: 'ErrorPortfoliosState',
          error: 'Sorry, an error has occurred. Please try later again',
        };
      }
      default: {
        return {
          kind: 'ErrorPortfoliosState',
          error: 'Sorry, an error has occurred. Please try later again',
        };
      }
    }
  }
}
