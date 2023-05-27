import { Portfolio } from '../domain';

export interface LoadingPortfoliosState {
  kind: 'LoadingPortfoliosState';
}

export interface LoadedPortfoliosState {
  kind: 'LoadedPortfoliosState';
  portfolios: Portfolio[];
}

export interface ErroPortfoliosState {
  kind: 'ErrorPortfoliosState';
  error: string;
}

export type PortfoliosState =
  | LoadingPortfoliosState
  | LoadedPortfoliosState
  | ErroPortfoliosState;

export const portfoliosInitialState: PortfoliosState = {
  kind: 'LoadingPortfoliosState',
};
