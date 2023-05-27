import { Ploc } from '../../common/presentation';
import { DataError } from '../../common/domain/data-error';
import { GetAllBuOwnersUseCase } from '../domain/usecases/get-all-bu-owners';
import { BuOwnersState, initialBuOwnersState } from './buOwners-state';
import { BuOwner } from '../domain';
export class BuOwnerPloc extends Ploc<BuOwnersState> {
  constructor(private getAllBuOwnersUseCase: GetAllBuOwnersUseCase) {
    super(initialBuOwnersState);
  }

  async getAll(): Promise<BuOwner[]> {
    const allBuOwners = await this.getAllBuOwnersUseCase.execute();
    let buOwnersResult: BuOwner[] = [];
    allBuOwners.fold(
      (error) => this.changeState(this.handleError(error)),
      (buOwners) => {
        this.changeState({ kind: 'LoadedBuOwnersState', buOwners });
        buOwnersResult = [...buOwners];
      }
    );
    return buOwnersResult;
  }

  handleError(error: DataError): BuOwnersState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: 'ErrorBuOwnersState',
          error: 'Sorry, an error has occurred. Please try later again',
        };
      }
      default: {
        return {
          kind: 'ErrorBuOwnersState',
          error: 'Sorry, an error has occurred. Please try later again',
        };
      }
    }
  }
}
