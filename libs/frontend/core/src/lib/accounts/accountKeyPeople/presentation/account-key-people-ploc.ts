import { UnbindKeyPeopleFromAccountUseCase } from './../domain/usecases/unbind-key-people-from-account-use-case';
import { BindKeyPeopleToAccountUseCase } from './../domain/usecases/bind-key-people-to-account-use-case';
import { UpdateKeyPeopleToAccountUseCase } from './../domain/usecases/update-key-people-to-account-use-case';
import { Ploc } from '../../../common/presentation';
import { DataError } from '../../../common/domain/data-error';
import { GetAccountKeyPeopleUseCase } from '../domain/usecases/get-account-key-people-use-case';
import {
  accountKeyPeopleErrorsKind,
  accountKeyPeopleInitialState,
  AccountKeyPeopleState,
} from './account-key-people-state';

export class AccountKeyPeoplePloc extends Ploc<AccountKeyPeopleState> {
  constructor(
    private getAccountKeyPeopleUseCase: GetAccountKeyPeopleUseCase,
    private bindKeyPeopleToAccountUseCase: BindKeyPeopleToAccountUseCase,
    private updateKeyPeopleToAccountUseCase: UpdateKeyPeopleToAccountUseCase,
    private unbindKeyPeopleFromAccountUseCase: UnbindKeyPeopleFromAccountUseCase
  ) {
    super(accountKeyPeopleInitialState);
  }

  async get(accountId: string) {
    this.changeState({ kind: 'LoadingAccountKeyPeopleState' });
    const accountKeyPeopleResult =
      await this.getAccountKeyPeopleUseCase.execute(accountId);
    accountKeyPeopleResult.fold(
      (error) =>
        this.changeState(this.handleError('ErrorAccountKeyPeopleState', error)),
      (accountKeyPeople) =>
        this.changeState({
          kind: 'LoadedAccountKeyPeopleState',
          accountKeyPeople,
        })
    );
  }

  async update(
    accountId: string,
    keyPeopleId: string,
    body: { notes: string }
  ) {
    this.changeState({ kind: 'UpdatingAccountKeyPeopleState' });
    const updateResult = await this.updateKeyPeopleToAccountUseCase.execute(
      accountId,
      keyPeopleId,
      body
    );
    updateResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorUpdateAccountKeyPeopleState', error)
        ),
      () => this.changeState({ kind: 'UpdatedAccountKeyPeopleState' })
    );
  }

  async bind(accountId: string, keyPeopleId: string, body: { notes: string }) {
    this.changeState({ kind: 'BindingAccountKeyPeopleState' });
    const bindResult = await this.bindKeyPeopleToAccountUseCase.execute(
      accountId,
      keyPeopleId,
      body
    );
    bindResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorBindAccountKeyPeopleState', error)
        ),
      () => this.changeState({ kind: 'BindedAccountKeyPeopleState' })
    );
  }

  async unbindKeyPeopleFromAccount(accountId: string, keyPeopleId: string) {
    const bindResult = await this.unbindKeyPeopleFromAccountUseCase.execute(
      accountId,
      keyPeopleId
    );
    bindResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorUnbindAccountKeyPeopleState', error)
        ),
      () => this.changeState({ kind: 'UnbindedAccountKeyPeopleState' })
    );
  }

  private handleError(
    kind: accountKeyPeopleErrorsKind,
    error: DataError
  ): AccountKeyPeopleState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: kind,
          error: 'Sorry, an error has occurred. Please try again later',
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
