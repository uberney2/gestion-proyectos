import { Ploc } from '../../common/presentation';
import { DataError } from '../../common/domain/data-error';
import {
  CreateQAUseCase,
  FindOneQAUseCase,
  QA,
  UpdateQAUseCase,
} from '../domain';
import { QAErrorsKind, qaInitialState, QAState } from './qa-state';

export class QAPloc extends Ploc<QAState> {
  constructor(
    private createQAUseCase: CreateQAUseCase,
    private updateQAUseCase: UpdateQAUseCase,
    private findOneQAUseCase: FindOneQAUseCase
  ) {
    super(qaInitialState);
  }

  async create(idProject: string, qa: QA) {
    this.changeState({ kind: 'CreatingQAState' });
    const createdQA = await this.createQAUseCase.execute(idProject, qa);
    createdQA.fold(
      (error) => {
        this.changeState(
          this.handleError('ErrorCreateQAState', error, undefined)
        );
      },
      (qa) => this.changeState({ kind: 'CreatedQAState', qa })
    );
  }

  getAll() {
    this.changeState({ kind: 'LoadingQAState' });
  }

  async update(projectId: string, qaId: string, qa: QA, lastQA: QA) {
    this.changeState({ kind: 'UpdatingQAState' });
    const updateResult = await this.updateQAUseCase.execute(
      projectId,
      qaId,
      qa
    );
    updateResult.fold(
      (error) =>
        this.changeState(this.handleError('ErrorUpdateQAState', error, lastQA)),
      (qa) => this.changeState({ kind: 'UpdatedQAState', qa })
    );
  }

  async findOne(projectId: string): Promise<QA | undefined> {
    this.changeState({ kind: 'LoadingQAState' });
    const findResult = await this.findOneQAUseCase.execute(projectId);
    let qaResult;
    findResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorLoadQAState', error, undefined)
        ),
      (qa) => {
        this.changeState({ kind: 'LoadedQAState', qa });
        qaResult = qa;
      }
    );
    return qaResult;
  }

  private handleError(
    kind: QAErrorsKind,
    error: DataError,
    lastQA: QA | undefined
  ): QAState {
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
          lastQA,
        };
      }
    }
  }
}
