import { Plan } from '../domain/plan';

export interface LoadedPlanState {
  kind: 'LoadedPlanState';
  plan: Plan;
}

export interface ErrorLoadPlanState {
  kind: 'ErrorLoadPlanState';
  error: string;
}

export interface LoadingPlanState {
  kind: 'LoadingPlanState';
}

export interface CreatingPlanState {
  kind: 'CreatingPlanState';
}

export interface CreatedPlanState {
  kind: 'CreatedPlanState';
  plan: Plan;
}

export interface ErrorCreatePlanState {
  kind: 'ErrorCreatePlanState';
  error: string;
}

export interface UpdatingPlanState {
  kind: 'UpdatingPlanState';
}

export interface UpdatedPlanState {
  kind: 'UpdatedPlanState';
  plan: Plan;
}

export interface ErrorUpdatePlanState {
  kind: 'ErrorUpdatePlanState';
  error: string;
  lastPlan?: Plan;
}

export type PlansState =
  | LoadedPlanState
  | ErrorLoadPlanState
  | LoadingPlanState
  | CreatedPlanState
  | CreatingPlanState
  | ErrorCreatePlanState
  | UpdatingPlanState
  | UpdatedPlanState
  | ErrorUpdatePlanState;

export const planInitialState: PlansState = {
  kind: 'LoadingPlanState',
};

export type planErrorsKind =
  | 'ErrorLoadPlanState'
  | 'ErrorCreatePlanState'
  | 'ErrorUpdatePlanState';
