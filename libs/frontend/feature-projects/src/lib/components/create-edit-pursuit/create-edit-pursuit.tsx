import {
  StyledPursuitsContainer,
  StyledPursuitsSubTitle,
  StyledPursuitsTitle,
} from './create-edit-pursuit.styles';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import '../../../../../../../apps/frontend/src/assets/react-tabs.css';
import { Breadcrumb, ChevronRightIcon, PopUp } from '@delia/ui-shared';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { PursuitsForm } from '../pursuits-form/pursuits-form';
import PlanForm from '../plan-form/plan-form';
import {
  AccountsPloc,
  AccountsState,
  ProcessPloc,
  ProcessState,
  ProjectsPloc,
  ProjectsState,
  ProjectsStatus,
  PursuitsStatus,
  PlansPloc,
  PlansState,
  TeamsPloc,
  TeamsState,
  QAState,
  QAPloc,
  GutState,
  GutPloc,
} from '@delia/frontend/core';
import { useEffect, useState } from 'react';
import TeamForm from '../team-form/team-form';
import ProcessForm from '../process-form/process-form';
import QAForm from '../qa-form/qa-form';
import GutForm from '../gut-form/gut-form';
import {
  createEditPursuit,
  getAccountsFromState,
  getPursuitFromState,
} from './create-edit-pursuit-logic';
import { usePursuitNotifications } from '../../hooks/create-edit-pursuit/use-pursuit-notifications';
import {
  createEditPlanForm,
  getPlanFromState,
} from './dimensions-logic/plan-logic';
import {
  createEditProcessForm,
  getProcessFromState,
} from './dimensions-logic/process-logic';
import {
  createEditGutForm,
  getGutFromState,
} from './dimensions-logic/gut-logic';
import { createEditQAForm, getQAFromState } from './dimensions-logic/qa-logic';
import {
  createEditTeamForm,
  getTeamFromState,
} from './dimensions-logic/team-logic';

type Mode = 'create' | 'edit';
export interface CreateEditPursuitProps {
  accountsState: AccountsState;
  accountsPloc: AccountsPloc;
  processState: ProcessState;
  processPloc: ProcessPloc;
  projectsState: ProjectsState;
  projectsPloc: ProjectsPloc;
  plansPloc: PlansPloc;
  plansState: PlansState;
  teamsState: TeamsState;
  teamsPloc: TeamsPloc;
  qaState: QAState;
  qaPloc: QAPloc;
  gutState: GutState;
  gutPloc: GutPloc;
  formMode: Mode;
}

export function CreateEditPursuit({
  formMode,
  accountsState,
  accountsPloc,
  processState,
  processPloc,
  projectsState,
  projectsPloc,
  plansPloc,
  plansState,
  teamsState,
  teamsPloc,
  qaState,
  qaPloc,
  gutState,
  gutPloc,
}: CreateEditPursuitProps) {
  const [selectedTabNumber, setSelectedTabNumber] = useState(0);
  const [openTabPopUp, setOpenTabPopUp] = useState(false);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [eventNumber, setEventNumber] = useState(0);
  const [openCancelPopUp, setOpenCancelPopUp] = useState(false);

  const { pursuitId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pursuitProcessLabel =
    formMode === 'create' ? 'New Pursuit' : 'Edit Pursuit';

  const pursuitTabs =
    formMode === 'create' ? 'react-tabs__tab-panel' : 'react-tabs__tab';

  const projectTypeStatusRelation = {
    Project: Object.values(ProjectsStatus),
    Pursuit: Object.values(PursuitsStatus),
  };

  usePursuitNotifications({
    processState,
    projectsState,
    plansState,
    teamsState,
    qaState,
    gutState,
  });

  useEffect(() => {
    accountsPloc.getAll();
  }, []);

  useEffect(() => {
    if (projectsState.kind === 'CreatedProjectState') {
      navigate(pathname.replace('create/', 'edit/'));
    }
  }, [projectsState]);

  const getProjectByName = (name: string) => {
    projectsPloc.findByParam(name);
  };

  const selectTab = (eventTabNumber: number) => {
    if (selectedTabNumber === eventTabNumber) return;
    setEventNumber(eventTabNumber);
    if (isFormDirty) {
      setOpenTabPopUp(true);
      return false;
    }
    setSelectedTabNumber(eventTabNumber);
    return true;
  };

  const navigateTabs = () => {
    setSelectedTabNumber(eventNumber);
    setOpenTabPopUp(false);
  };

  const handleCancel = () => {
    setOpenCancelPopUp(true);
  };

  return (
    <StyledPursuitsContainer>
      <Breadcrumb separator={<ChevronRightIcon />}>
        <Link to={'/dashboard/pursuits'}>Pursuits</Link>
        <Link to={''}>{pursuitProcessLabel}</Link>
      </Breadcrumb>
      <StyledPursuitsTitle>{pursuitProcessLabel}</StyledPursuitsTitle>
      <Tabs
        selectedIndex={selectedTabNumber}
        onSelect={selectTab}
        selectedTabClassName="react-tabs__tab--selected"
      >
        <TabList>
          <Tab>Details</Tab>
          <Tab className={pursuitTabs}>Team</Tab>
          <Tab className={pursuitTabs}>Plan</Tab>
          <Tab className={pursuitTabs}>Process</Tab>
          <Tab className={pursuitTabs}>QA</Tab>
          <Tab className={pursuitTabs}>Gut</Tab>
        </TabList>
        <TabPanel>
          <StyledPursuitsSubTitle>Pursuit Details</StyledPursuitsSubTitle>
          <PursuitsForm
            formMode={formMode}
            projectTypeStatusRelation={projectTypeStatusRelation}
            accounts={getAccountsFromState(accountsState)}
            onSubmit={(data) =>
              pursuitId &&
              createEditPursuit(pursuitId, formMode, projectsPloc, data)
            }
            onProjectNameChange={getProjectByName}
            projectsState={projectsState}
            defaultProject={getPursuitFromState(projectsState)}
            setIsDirty={setIsFormDirty}
            handleCancel={handleCancel}
          />
        </TabPanel>
        <TabPanel>
          <StyledPursuitsSubTitle>Pursuit Team</StyledPursuitsSubTitle>
          <TeamForm
            onSubmit={(data) => {
              (projectsState.kind === 'CreatedProjectState' ||
                projectsState.kind === 'UpdatedProjectState') &&
                createEditTeamForm(
                  projectsState.project.id,
                  teamsState,
                  teamsPloc,
                  data
                );
            }}
            handleCancel={handleCancel}
            defaultTeam={getTeamFromState(teamsState)}
            setIsDirty={setIsFormDirty}
          />
        </TabPanel>
        <TabPanel>
          <StyledPursuitsSubTitle>Pursuit Plan</StyledPursuitsSubTitle>
          <PlanForm
            onSubmit={(data) =>
              (projectsState.kind === 'CreatedProjectState' ||
                projectsState.kind === 'UpdatedProjectState') &&
              createEditPlanForm(
                projectsState.project.id,
                plansState,
                plansPloc,
                data
              )
            }
            defaultPlan={getPlanFromState(plansState)}
            setIsDirty={setIsFormDirty}
            handleCancel={handleCancel}
          />
        </TabPanel>
        <TabPanel>
          <StyledPursuitsSubTitle>Pursuit Process</StyledPursuitsSubTitle>
          <ProcessForm
            onSubmit={(data: any) =>
              (projectsState.kind === 'CreatedProjectState' ||
                projectsState.kind === 'UpdatedProjectState') &&
              createEditProcessForm(
                projectsState.project.id,
                processState,
                processPloc,
                data
              )
            }
            defaultProcess={getProcessFromState(processState)}
            setIsDirty={setIsFormDirty}
            handleCancel={handleCancel}
          />
        </TabPanel>
        <TabPanel>
          <StyledPursuitsSubTitle>Pursuit QA</StyledPursuitsSubTitle>
          <QAForm
            onSubmit={(data: any) =>
              (projectsState.kind === 'CreatedProjectState' ||
                projectsState.kind === 'UpdatedProjectState') &&
              createEditQAForm(projectsState.project.id, qaState, qaPloc, data)
            }
            defaultQA={getQAFromState(qaState)}
            setIsDirty={setIsFormDirty}
            handleCancel={handleCancel}
          />
        </TabPanel>
        <TabPanel>
          <StyledPursuitsSubTitle>Pursuit Gut</StyledPursuitsSubTitle>
          <GutForm
            onSubmit={(data: any) =>
              (projectsState.kind === 'CreatedProjectState' ||
                projectsState.kind === 'UpdatedProjectState') &&
              createEditGutForm(
                projectsState.project.id,
                gutState,
                gutPloc,
                data
              )
            }
            defaultGut={getGutFromState(gutState)}
            setIsDirty={setIsFormDirty}
            handleCancel={handleCancel}
          />
        </TabPanel>
        <PopUp
          onClick={navigateTabs}
          isVisible={openTabPopUp}
          closePopUp={setOpenTabPopUp}
          buttonMessage={'Change tab'}
          children={
            <>
              <p>Are you sure you want to change tabs?</p>
              <br />
              <p>
                By doing this, all the information that hasn't been saved will
                be lost
              </p>
            </>
          }
        />
        <PopUp
          onClick={() => navigate('/dashboard/pursuits')}
          isVisible={openCancelPopUp}
          closePopUp={setOpenCancelPopUp}
          buttonMessage={'Yes, Cancel'}
          children={
            <>
              <p>
                Are you sure you want to cancel the creation of this process?
              </p>
              <br />
              <p>All the information currently filled will be lost.</p>
            </>
          }
        />
      </Tabs>
    </StyledPursuitsContainer>
  );
}

export default CreateEditPursuit;
