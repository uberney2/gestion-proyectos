import { UpdateProcessUseCase } from './../domain/usecases/update-process-use-case';
import { Ploc } from '../../common/presentation';
import { DataError } from '../../common/domain/data-error';
import {
  CreateProcessUseCase,
  FindOneProcessUseCase,
  Process,
} from '../domain';
import {
  ProcessErrorsKind,
  processInitialState,
  ProcessState,
} from './process-state';

export class ProcessPloc extends Ploc<ProcessState> {
  constructor(
    private createProcessUseCase: CreateProcessUseCase,
    private updateProcessUseCase: UpdateProcessUseCase,
    private findOneProcessUseCase: FindOneProcessUseCase
  ) {
    super(processInitialState);
  }

  async create(idProject: string, process: Process) {
    this.changeState({ kind: 'CreatingProcessState' });
    const createdProcess = await this.createProcessUseCase.execute(
      idProject,
      process
    );
    createdProcess.fold(
      (error) => {
        this.changeState(
          this.handleError('ErrorCreateProcessState', error, undefined)
        );
      },
      (process) => this.changeState({ kind: 'CreatedProcessState', process })
    );
  }

  getAll() {
    this.changeState({ kind: 'LoadingProcessState' });
  }

  async update(
    projectId: string,
    processId: string,
    process: Process,
    lastProcess: Process
  ) {
    this.changeState({ kind: 'UpdatingProcessState' });
    const updateProcessResult = await this.updateProcessUseCase.execute(
      projectId,
      processId,
      process
    );

    updateProcessResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorUpdateProcessState', error, lastProcess)
        ),
      (process) => {
        this.changeState({ kind: 'UpdatedProcessState', process });
      }
    );
  }

  async findOne(param: string): Promise<Process | undefined> {
    this.changeState({ kind: 'LoadingProcessState' });
    const findProcessResult = await this.findOneProcessUseCase.execute(param);
    let processResult;
    findProcessResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorLoadProcessState', error, undefined)
        ),
      (process) => {
        this.changeState({ kind: 'LoadedProcessState', process: process });
        processResult = process;
      }
    );
    return processResult;
  }

  private handleError(
    kind: ProcessErrorsKind,
    error: DataError,
    lastProcess: Process | undefined
  ): ProcessState {
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
          lastProcess,
        };
      }
    }
  }
}
