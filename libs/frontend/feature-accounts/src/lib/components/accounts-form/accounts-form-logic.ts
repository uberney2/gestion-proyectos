import {
  Account,
  AccountsPloc,
  AccountUpdate,
  BuOwner,
  BuOwnersState,
  Portfolio,
  PortfoliosState,
} from '@delia/frontend/core';

export const handleAccountUpdate = (
  accountsPloc: AccountsPloc,
  id: string,
  accountUpdate: AccountUpdate
) => {
  accountsPloc.update(id, accountUpdate);
};

export const handleAccountCreate = (
  accountsPloc: AccountsPloc,
  account: Account
) => {
  accountsPloc.create(account);
};

export const findAccount = (accountsPloc: AccountsPloc, param: string) => {
  accountsPloc.findOne(param);
};

export const getSelectedBuOwner = (
  buOwnersState: BuOwnersState,
  buOwner: {
    label: string;
  }
): BuOwner | undefined => {
  let buOwnerResponse;
  if (buOwner && buOwnersState.kind === 'LoadedBuOwnersState') {
    const buOwners = buOwnersState.buOwners;
    [buOwnerResponse] = buOwners.filter(
      (value) => value.name === buOwner.label
    );
  }
  return buOwnerResponse;
};

export const getSelectedPortfolio = (
  portfoliosState: PortfoliosState,
  portfolio: {
    label: string;
  }
): Portfolio | undefined => {
  let portfolioResponse;
  if (portfolio && portfoliosState.kind === 'LoadedPortfoliosState') {
    const portfolios = portfoliosState.portfolios;
    [portfolioResponse] = portfolios.filter(
      (value) => value.name === portfolio.label
    );
  }
  return portfolioResponse;
};
