import { UpdatePlanUseCase } from './../../plans/domain/usecases/update-plan-use-case';
import { ApiConfig, HttpClient } from '../data/http-client';
import AxiosHttpClient from '../data/axios-http-client';
import {
  BuOwnerPloc,
  BuOwnerRestApiRepository,
  GetAllBuOwnersUseCase,
} from './../../business-owners';

import {
  GetAllAccountsUseCase,
  CreateAccountUseCase,
  FindOneAccountUseCase,
  UpdateAccountUseCase,
  AccountsPloc,
  AccountRestRepository,
} from '../../accounts';
import {
  GetAllPortfoliosUseCase,
  PortfolioPloc,
  PortfolioRestApiRepository,
} from '../../portfolios';
import {
  KeyPeoplePloc,
  KeyPeopleRestRepository,
  GetAllKeyPeopleUseCase,
  CreateKeyPeopleUseCase,
} from '../../key-people';
import {
  UnbindKeyPeopleFromAccountUseCase,
  BindKeyPeopleToAccountUseCase,
  UpdateKeyPeopleToAccountUseCase,
  GetAccountKeyPeopleUseCase,
  AccountKeyPeopleRestRepository,
  AccountKeyPeoplePloc,
} from '../../accounts/accountKeyPeople';

import {
  ProjectsPloc,
  CreateProjectUseCase,
  ProjectRestRepository,
  UpdateProjectUseCase,
  FindProjectByParamUseCase,
  GetAllProjectsWithDimensionsUseCase,
  GetAllAccountProjectsUseCase,
} from './../../projects';

import {
  PlansPloc,
  PlanRestRepository,
  CreatePlanUseCase,
  FindOnePlanUseCase,
} from '../../plans';
import {
  TeamsPloc,
  CreateTeamUseCase,
  TeamRestRepository,
  UpdateTeamUseCase,
  FindOneTeamUseCase,
} from './../../teams';
import {
  CreateProcessUseCase,
  ProcessPloc,
  ProcessRestRepository,
  UpdateProcessUseCase,
  FindOneProcessUseCase,
} from '../../processes';
import {
  CreateQAUseCase,
  FindOneQAUseCase,
  QAPloc,
  QARestRepository,
  UpdateQAUseCase,
} from '../../qa';
import {
  CreateGutUseCase,
  GutPloc,
  GutRestRepository,
  UpdateGutUseCase,
  FindOneGutUseCase,
} from '../../gut';

function providePlansPloc(httpClient: HttpClient): PlansPloc {
  const planRepository = new PlanRestRepository(httpClient);
  const createPlanUseCase = new CreatePlanUseCase(planRepository);
  const updatePlanUseCase = new UpdatePlanUseCase(planRepository);
  const findOnePlanUseCase = new FindOnePlanUseCase(planRepository);
  return new PlansPloc(
    createPlanUseCase,
    updatePlanUseCase,
    findOnePlanUseCase
  );
}

function provideAccountsPloc(httpClient: HttpClient): AccountsPloc {
  const accountRepository = new AccountRestRepository(httpClient);
  const getAllProductsUseCase = new GetAllAccountsUseCase(accountRepository);
  const createAccountUseCase = new CreateAccountUseCase(accountRepository);
  const findOneAccountUseCase = new FindOneAccountUseCase(accountRepository);
  const updateAccountUseCase = new UpdateAccountUseCase(accountRepository);
  return new AccountsPloc(
    getAllProductsUseCase,
    createAccountUseCase,
    findOneAccountUseCase,
    updateAccountUseCase
  );
}

function provideAccountKeyPeoplePloc(httpClient: HttpClient) {
  const accountKeyPeopleRepository = new AccountKeyPeopleRestRepository(
    httpClient
  );
  const getAllAccountKeyPeopleUseCase = new GetAccountKeyPeopleUseCase(
    accountKeyPeopleRepository
  );
  const bindKeyPeopleToAccountUseCase = new BindKeyPeopleToAccountUseCase(
    accountKeyPeopleRepository
  );
  const updateKeyPeopleToAccountUseCase = new UpdateKeyPeopleToAccountUseCase(
    accountKeyPeopleRepository
  );
  const unbindKeyPeopleFromAccountUseCase =
    new UnbindKeyPeopleFromAccountUseCase(accountKeyPeopleRepository);

  return new AccountKeyPeoplePloc(
    getAllAccountKeyPeopleUseCase,
    bindKeyPeopleToAccountUseCase,
    updateKeyPeopleToAccountUseCase,
    unbindKeyPeopleFromAccountUseCase
  );
}

function provideKeyPeoplePloc(httpClient: HttpClient) {
  const keyPeopleRepository = new KeyPeopleRestRepository(httpClient);
  const getAllKeyPeopleUseCase = new GetAllKeyPeopleUseCase(
    keyPeopleRepository
  );
  const createKeyPeopleUseCase = new CreateKeyPeopleUseCase(
    keyPeopleRepository
  );

  return new KeyPeoplePloc(getAllKeyPeopleUseCase, createKeyPeopleUseCase);
}

function provideBuOwnersPloc(httpClient: HttpClient) {
  const buOwnerRepository = new BuOwnerRestApiRepository(httpClient);
  const getAllBuOwnersUseCase = new GetAllBuOwnersUseCase(buOwnerRepository);
  return new BuOwnerPloc(getAllBuOwnersUseCase);
}

function providePortfoliosPloc(httpClient: HttpClient) {
  const portfolioRepository = new PortfolioRestApiRepository(httpClient);
  const getAllPortfoliosUseCase = new GetAllPortfoliosUseCase(
    portfolioRepository
  );
  return new PortfolioPloc(getAllPortfoliosUseCase);
}

function provideProjectsPloc(httpClient: HttpClient) {
  const projectsRepository = new ProjectRestRepository(httpClient);
  const createProjectUseCase = new CreateProjectUseCase(projectsRepository);
  const getAllProjectsWithDimensionsUseCase =
    new GetAllProjectsWithDimensionsUseCase(projectsRepository);
  const findProjectByParamUseCase = new FindProjectByParamUseCase(
    projectsRepository
  );
  const getAllAccountsProjectsUseCase = new GetAllAccountProjectsUseCase(
    projectsRepository
  );
  const updateProjectUseCase = new UpdateProjectUseCase(projectsRepository);
  return new ProjectsPloc(
    createProjectUseCase,
    findProjectByParamUseCase,
    updateProjectUseCase,
    getAllProjectsWithDimensionsUseCase,
    getAllAccountsProjectsUseCase
  );
}

function provideProcessPloc(httpClient: HttpClient) {
  const processRepository = new ProcessRestRepository(httpClient);
  const createProcessUseCase = new CreateProcessUseCase(processRepository);
  const updateProcessUseCase = new UpdateProcessUseCase(processRepository);
  const findOneProcessUseCase = new FindOneProcessUseCase(processRepository);

  return new ProcessPloc(
    createProcessUseCase,
    updateProcessUseCase,
    findOneProcessUseCase
  );
}

function provideTeamsPloc(httpClient: HttpClient) {
  const teamsRepository = new TeamRestRepository(httpClient);
  const createTeamUseCase = new CreateTeamUseCase(teamsRepository);
  const updateTeamUseCase = new UpdateTeamUseCase(teamsRepository);
  const findOneTeamUseCase = new FindOneTeamUseCase(teamsRepository);
  return new TeamsPloc(
    createTeamUseCase,
    updateTeamUseCase,
    findOneTeamUseCase
  );
}

function provideQAPloc(httpClient: HttpClient) {
  const qaRepository = new QARestRepository(httpClient);
  const createQAUseCase = new CreateQAUseCase(qaRepository);
  const updateQAUseCase = new UpdateQAUseCase(qaRepository);
  const findOneQAUseCase = new FindOneQAUseCase(qaRepository);

  return new QAPloc(createQAUseCase, updateQAUseCase, findOneQAUseCase);
}

function provideGutPloc(httpClient: HttpClient) {
  const gutRepository = new GutRestRepository(httpClient);
  const createGutUseCase = new CreateGutUseCase(gutRepository);
  const updateGutUseCase = new UpdateGutUseCase(gutRepository);
  const findOneGutUseCase = new FindOneGutUseCase(gutRepository);

  return new GutPloc(createGutUseCase, updateGutUseCase, findOneGutUseCase);
}

export function getDependenciesProviders(apiConfig: ApiConfig) {
  const httpClient = new AxiosHttpClient(apiConfig);
  return {
    accountsPloc: provideAccountsPloc(httpClient),
    buOwnersPloc: provideBuOwnersPloc(httpClient),
    portfoliosPloc: providePortfoliosPloc(httpClient),
    accountKeyPeoplePloc: provideAccountKeyPeoplePloc(httpClient),
    keyPeoplePloc: provideKeyPeoplePloc(httpClient),
    processPloc: provideProcessPloc(httpClient),
    projectsPloc: provideProjectsPloc(httpClient),
    planPloc: providePlansPloc(httpClient),
    teamsPloc: provideTeamsPloc(httpClient),
    qaPloc: provideQAPloc(httpClient),
    gutPloc: provideGutPloc(httpClient),
  };
}
