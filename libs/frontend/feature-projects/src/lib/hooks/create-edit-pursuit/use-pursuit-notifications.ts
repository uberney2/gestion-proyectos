import {
  GutState,
  PlansState,
  ProcessState,
  ProjectsState,
  QAState,
  TeamsState,
} from '@delia/frontend/core';
import { toastError, toastSuccess } from '@delia/ui-shared';
import { useEffect } from 'react';

interface UsePursuitNotificationsProps {
  processState: ProcessState;
  projectsState: ProjectsState;
  plansState: PlansState;
  teamsState: TeamsState;
  qaState: QAState;
  gutState: GutState;
}

export function usePursuitNotifications({
  processState,
  projectsState,
  plansState,
  teamsState,
  qaState,
  gutState,
}: UsePursuitNotificationsProps) {
  useEffect(() => {
    switch (projectsState.kind) {
      case 'ErrorCreateProjectState':
        toastError(projectsState.error);
        break;
      case 'CreatedProjectState':
        toastSuccess('Project created');
        break;
      case 'UpdatedProjectState':
        toastSuccess('Project edited');
        break;
      case 'ErrorUpdateProjectState':
        toastError(projectsState.error);
        break;
    }
  }, [projectsState]);

  useEffect(() => {
    switch (teamsState.kind) {
      case 'ErrorCreateTeamState':
        toastError(teamsState.error);
        break;
      case 'CreatedTeamState':
        toastSuccess('Team created');
        break;
      case 'UpdatedTeamState':
        toastSuccess('Team edited');
        break;
      case 'ErrorUpdateTeamState':
        toastError(teamsState.error);
        break;
      default:
        break;
    }
  }, [teamsState]);

  useEffect(() => {
    switch (plansState.kind) {
      case 'ErrorCreatePlanState':
        toastError(plansState.error);
        break;
      case 'CreatedPlanState':
        toastSuccess('Plan created');
        break;
      case 'UpdatedPlanState':
        toastSuccess('Plan edited');
        break;
      case 'ErrorUpdatePlanState':
        toastError(plansState.error);
        break;
      default:
        break;
    }
  }, [plansState]);

  useEffect(() => {
    switch (processState.kind) {
      case 'ErrorCreateProcessState':
        toastError(processState.error);
        break;
      case 'CreatedProcessState':
        toastSuccess('Process created');
        break;
      case 'UpdatedProcessState':
        toastSuccess('Process edited');
        break;
      case 'ErrorUpdateProcessState':
        toastError(processState.error);
        break;
      default:
        break;
    }
  }, [processState]);

  useEffect(() => {
    switch (qaState.kind) {
      case 'ErrorCreateQAState':
        toastError(qaState.error);
        break;
      case 'CreatedQAState':
        toastSuccess('QA created');
        break;
      case 'UpdatedQAState':
        toastSuccess('QA edited');
        break;
      case 'ErrorUpdateQAState':
        toastError(qaState.error);
        break;
      default:
        break;
    }
  }, [qaState]);

  useEffect(() => {
    switch (gutState.kind) {
      case 'ErrorCreateGutState':
        toastError(gutState.error);
        break;
      case 'CreatedGutState':
        toastSuccess('Gut created');
        break;
      case 'UpdatedGutState':
        toastSuccess('Gut edited');
        break;
      case 'ErrorUpdateGutState':
        toastError(gutState.error);
        break;
      default:
        break;
    }
  }, [gutState]);
}
