import Button from '../button/button';
import { PencilRed } from '../icon-svg';
import StatusLabel from '../status-label/status-label';

import {
  StyledAccountName,
  StyledCardKanban,
  StyledContact,
  StyledContentCard,
  StyledGroupName,
  StyledIcon,
  StyledLabelGroup,
  StyledLastModified,
  StyledPortfolioName,
  StyledPursuitName,
  StyledUsaPointOfContact,
} from './card-kanban.styles';

export type statusTypes = 'Good' | 'Warning' | 'Bad' | 'Not Defined';

export type dimensionStatus = {
  team: { status: statusTypes; observations: string };
  plan: { status: statusTypes; observations: string };
  process: { status: statusTypes; observations: string };
  QA: { status: statusTypes; observations: string };
  gut: { status: statusTypes; observations: string };
};

export interface CardKanbanProps {
  id: string;
  pursuitName: string;
  accountName: string;
  portfolioName: string;
  usaPointOfContact: string;
  dimension: dimensionStatus;
  lastUpdated: string;
  handler: () => void;
}

export function CardKanban({
  id,
  pursuitName,
  accountName,
  portfolioName,
  usaPointOfContact,
  dimension,
  lastUpdated,
  handler,
}: CardKanbanProps) {
  return (
    <StyledCardKanban>
      <StyledIcon>
        <Button
          type="icon"
          text=""
          icon={<PencilRed width={15} />}
          onClick={handler}
        ></Button>
      </StyledIcon>
      <StyledContentCard>
        <StyledGroupName>
          <StyledPursuitName>{pursuitName}</StyledPursuitName>
          <StyledAccountName>{accountName}</StyledAccountName>
        </StyledGroupName>
        <StyledPortfolioName>{portfolioName}</StyledPortfolioName>
        <StyledUsaPointOfContact>
          <p>USA Point Of Contact</p>
          <StyledContact>{usaPointOfContact}</StyledContact>
        </StyledUsaPointOfContact>
        <StyledLabelGroup>
          <StatusLabel
            id={`team${id.replace(/-/g, '')}`}
            text="Team"
            status={dimension.team.status}
            content={dimension.team.observations}
          />
          <StatusLabel
            id={`plan${id.replace(/-/g, '')}`}
            text="Plan"
            status={dimension.plan.status}
            content={dimension.plan.observations}
          />
          <StatusLabel
            id={`process${id.replace(/-/g, '')}`}
            text="Process"
            status={dimension.process.status}
            content={dimension.process.observations}
          />
          <StatusLabel
            id={`QA${id.replace(/-/g, '')}`}
            text="QA"
            status={dimension.QA.status}
            content={dimension.QA.observations}
          />
          <StatusLabel
            id={`gut${id.replace(/-/g, '')}`}
            text="Gut Feeling"
            status={dimension.gut.status}
            content={dimension.gut.observations}
          />
        </StyledLabelGroup>
        <StyledLastModified>Last updated: {lastUpdated}</StyledLastModified>
      </StyledContentCard>
    </StyledCardKanban>
  );
}
