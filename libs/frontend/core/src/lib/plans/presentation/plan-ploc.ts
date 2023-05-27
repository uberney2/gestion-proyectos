import { Ploc } from '../../common/presentation';
import { DataError } from '../../common/domain/data-error';
import { planErrorsKind, planInitialState, PlansState } from './plan-state';
import {
  CreatePlanUseCase,
  FindOnePlanUseCase,
  Plan,
  PlanId,
  UpdatePlanUseCase,
} from '../domain';
import { ProjectId } from '../../projects';

export class PlansPloc extends Ploc<PlansState> {
  constructor(
    private createPlanUseCase: CreatePlanUseCase,
    private updatePlanUseCase: UpdatePlanUseCase,
    private findOnePlanUseCase: FindOnePlanUseCase
  ) {
    super(planInitialState);
  }

  async create(projectId: ProjectId, plan: Plan) {
    this.changeState({ kind: 'CreatingPlanState' });
    const createResult = await this.createPlanUseCase.execute(projectId, plan);
    createResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorCreatePlanState', error, undefined)
        ),
      () => this.changeState({ kind: 'CreatedPlanState', plan: plan })
    );
  }

  async update(
    projectId: ProjectId,
    planId: PlanId,
    plan: Plan,
    lastPlan: Plan
  ) {
    this.changeState({ kind: 'UpdatingPlanState' });
    const updateResult = await this.updatePlanUseCase.execute(
      projectId,
      planId,
      plan
    );

    updateResult.fold(
      (error) => {
        this.changeState(
          this.handleError('ErrorUpdatePlanState', error, lastPlan)
        );
      },
      (plan) => {
        this.changeState({ kind: 'UpdatedPlanState', plan });
      }
    );
  }

  getAll() {
    this.changeState({ kind: 'LoadingPlanState' });
  }

  async findOne(param: string): Promise<Plan | undefined> {
    this.changeState({ kind: 'LoadingPlanState' });
    const findPlanResult = await this.findOnePlanUseCase.execute(param);
    let planResult;
    findPlanResult.fold(
      (error) =>
        this.changeState(
          this.handleError('ErrorLoadPlanState', error, undefined)
        ),
      (plan) => {
        this.changeState({ kind: 'LoadedPlanState', plan: plan });
        planResult = plan;
      }
    );
    return planResult;
  }

  private handleError(
    kind: planErrorsKind,
    error: DataError,
    lastPlan: Plan | undefined
  ): PlansState {
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
          lastPlan,
        };
      }
    }
  }
}
