import { fromAccountDtoToDomain } from '../../accounts';
import { Project } from '../domain';
import { ProjectDto } from './projects-dto';
import { fromDtoToDomain as fromTeamDtoToDomain } from '../../teams/data/mapper';
import { fromDtoToDomain as fromQADtoToDomain } from '../../qa/data/mapper';
import { fromDtoToDomain as fromProcessDtoToDomain } from '../../processes/data/mapper';
import { fromDtoToDomain as fromPlanDtoToDomain } from '../../plans/data/mapper';
import { FromDtoToDomain as fromGutDtoToDomain } from '../../gut/data/mapper';

export function fromDtoToDomain(projectDto: ProjectDto): Project {
  return {
    id: projectDto.id,
    name: projectDto.name,
    account: fromAccountDtoToDomain(projectDto.account),
    gmPercentage: projectDto.gmPercentage,
    totalSOW: projectDto.totalSOW,
    contractType: projectDto.contractType,
    usaPointOfContact: projectDto.usaPointOfContact,
    pursuitStartDate: projectDto.pursuitStartDate
      ? new Date(projectDto.pursuitStartDate)
      : undefined,
    pursuitEndDate: projectDto.pursuitEndDate
      ? new Date(projectDto.pursuitEndDate)
      : undefined,
    statusChangeDate: new Date(projectDto.statusChangeDate),
    status: projectDto.status,
    additionalBackground: projectDto.additionalBackground,
    onboardingProcess: projectDto.onboardingProcess,
    servicesScope: projectDto.servicesScope,
    levelOfAccount: projectDto.levelOfAccount,
    responsibleFromLatam: projectDto.responsibleFromLatam,
    team: projectDto.team && fromTeamDtoToDomain(projectDto.team),
    process: projectDto.process && fromProcessDtoToDomain(projectDto.process),
    plan: projectDto.plan && fromPlanDtoToDomain(projectDto.plan),
    gut: projectDto.gut && fromGutDtoToDomain(projectDto.gut),
    QA: projectDto.qa && fromQADtoToDomain(projectDto.qa),
  };
}
