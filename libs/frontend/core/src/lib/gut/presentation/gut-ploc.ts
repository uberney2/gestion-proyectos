import { Ploc } from '../../common/presentation';
import { DataError } from '../../common/domain/data-error';
import { CreateGutUseCase, Gut, UpdateGutUseCase } from '../domain';
import { GutErrorsKind, gutInitialState, GutState } from './gut-state';
import { FindOneGutUseCase } from '../domain/usecases/get-gut-use-case';

export class GutPloc extends Ploc<GutState> {
  constructor(
    private createGutUseCase: CreateGutUseCase,
    private updateGutUseCase: UpdateGutUseCase,
    private findOneGutUseCase: FindOneGutUseCase
  ) {
    super(gutInitialState);
  }

  async create(idProject: string, gut: Gut) {
    this.changeState({ kind: 'CreatingGutState' });
    const createdGut = await this.createGutUseCase.execute(idProject, gut);
    createdGut.fold(
      (error) => {
        this.changeState(
          this.handleError('ErrorCreateGutState', error, undefined)
        );
      },
      (gut) => this.changeState({ kind: 'CreatedGutState', gut })
    );
  }

  getAll() {
    this.changeState({ kind: 'LoadingGutState' });
  }

  async update(projectId: string, gutId: string, gut: Gut, lastGut: Gut) {
    this.changeState({ kind: 'UpdatingGutState' });
    const updateGutResult = await this.updateGutUseCase.execute(
      projectId,
      gutId,
      gut
    );

    updateGutResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorUpdateGutState', error, lastGut)
        ),
      (gut) => {
        this.changeState({ kind: 'UpdatedGutState', gut });
      }
    );
  }

  async findOne(param: string): Promise<Gut | undefined> {
    this.changeState({ kind: 'LoadingGutState' });
    const findGutResult = await this.findOneGutUseCase.execute(param);
    let gutResult;
    findGutResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorLoadGutState', error, undefined)
        ),
      (gut) => {
        this.changeState({ kind: 'LoadedGutState', gut: gut });
        gutResult = gut;
      }
    );
    return gutResult;
  }

  private handleError(
    kind: GutErrorsKind,
    error: DataError,
    lastGut: Gut | undefined
  ): GutState {
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
          lastGut,
        };
      }
    }
  }
}
