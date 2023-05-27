import { UpdateAccountUseCase } from './../domain/usecases/update-account-usecase';
import { FindOneAccountUseCase } from './../domain/usecases/get-account-use-case';
import { CreateAccountUseCase } from '../domain/usecases/create-account-use-case';
import { Ploc } from '../../common/presentation';
import {
  accountsInitialState,
  AccountsState,
  accountsErrorsKind,
} from './accounts-state';
import { Account, AccountUpdate, GetAllAccountsUseCase } from '../domain';
import { DataError } from '../../common/domain/data-error';

export class AccountsPloc extends Ploc<AccountsState> {
  constructor(
    private getAllAccountsUseCase: GetAllAccountsUseCase,
    private createAccountUseCase: CreateAccountUseCase,
    private findOneAccountUseCase: FindOneAccountUseCase,
    private updateAccountUseCase: UpdateAccountUseCase
  ) {
    super(accountsInitialState);
  }

  async getAll() {
    this.changeState({ kind: 'LoadingAccountsState' });
    const allAccountsResult = await this.getAllAccountsUseCase.execute();
    allAccountsResult.fold(
      (error) =>
        this.changeState(this.handleError('ErrorAccountsState', error)),
      (accounts) => {
        this.changeState({
          kind: 'LoadedAccountsState',
          accounts,
        });
      }
    );
  }

  async create(account: Account) {
    this.changeState({ kind: 'CreatingAccountState' });
    const accountCreationResult = await this.createAccountUseCase.execute(
      account
    );
    accountCreationResult.fold(
      (error) =>
        this.changeState(this.handleError('ErrorCreateAccountState', error)),
      (account) => {
        this.changeState({ kind: 'CreatedAccountState', account });
      }
    );
  }

  async findOne(param: string): Promise<Account | undefined> {
    this.changeState({ kind: 'LoadingAccountsState' });
    const findAccountResult = await this.findOneAccountUseCase.execute(param);
    let accountResult;
    findAccountResult.fold(
      (error) => this.changeState(this.handleError('ErrorAccountState', error)),
      (account) => {
        this.changeState({ kind: 'LoadedAccountState', account: account });
        accountResult = account;
      }
    );
    return accountResult;
  }

  async update(id: string, account: AccountUpdate) {
    this.changeState({ kind: 'UpdatingAccountState' });
    const updatedAccountResult = await this.updateAccountUseCase.execute(
      id,
      account
    );

    updatedAccountResult.fold(
      (error) =>
        this.changeState(this.handleError('ErrorUpdateAccountState', error)),
      (account) => this.changeState({ kind: 'UpdatedAccountState', account })
    );
  }

  setAccount(account: Account) {
    this.changeState({ kind: 'SettedAccountState', account });
  }

  private handleError(
    kind: accountsErrorsKind,
    error: DataError
  ): AccountsState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: kind,
          error: 'Sorry, an error has occurred. Please try again later',
        };
      }
      case 'GatewayTimeoutError': {
        return {
          kind: kind,
          error: 'No internet connection established ',
        };
      }
      default: {
        return {
          kind: kind,
          error: error.error.message,
        };
      }
    }
  }
}
