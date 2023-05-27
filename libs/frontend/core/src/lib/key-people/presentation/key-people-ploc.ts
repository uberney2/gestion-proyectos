import { DataError } from '../../common/domain/data-error';
import { Ploc } from '../../common/presentation';
import { KeyPeople } from '../domain';
import { CreateKeyPeopleUseCase } from '../domain/usecases/create-key-people-use-case';
import { GetAllKeyPeopleUseCase } from '../domain/usecases/get-all-key-people-use-case';

import { initialKeyPeopleState, KeyPeopleState } from './key-people-state';

export class KeyPeoplePloc extends Ploc<KeyPeopleState> {
  constructor(
    private getAllKeyPeopleUseCase: GetAllKeyPeopleUseCase,
    private createKeyPeopleUseCase: CreateKeyPeopleUseCase
  ) {
    super(initialKeyPeopleState);
  }

  async getAll(): Promise<KeyPeople[]> {
    const allKeyPeople = await this.getAllKeyPeopleUseCase.execute();
    let keyPeopleResult: KeyPeople[] = [];
    allKeyPeople.fold(
      (error) => this.changeState(this.handleError(error)),
      (keyPeople) => {
        this.changeState({ kind: 'LoadedKeyPeopleState', keyPeople });
        keyPeopleResult = [...keyPeople];
      }
    );
    return keyPeopleResult;
  }

  async create(keyPeople: KeyPeople) {
    const keyPersonCreationResult = await this.createKeyPeopleUseCase.execute(
      keyPeople
    );

    keyPersonCreationResult.fold(
      (error) => this.changeState(this.handleError(error)),
      () => {
        this.changeState({ kind: 'CreatedKeyPeopleState' });
      }
    );
  }

  setKeyPeople = (keyPeople: KeyPeople) => {
    this.changeState({
      kind: 'SettedKeyPeopleState',
      keyPeople: keyPeople,
    });
  };

  handleError(error: DataError): KeyPeopleState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: 'ErrorKeyPeopleState',
          error: 'Sorry, an error has occurred. Please try later again',
        };
      }
      default: {
        return {
          kind: 'ErrorKeyPeopleState',
          error: error.error.message,
        };
      }
    }
  }
}
