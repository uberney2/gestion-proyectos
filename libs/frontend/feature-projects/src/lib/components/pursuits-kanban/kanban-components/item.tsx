import { Project } from '@delia/frontend/core';
import { CardKanban } from '@delia/ui-shared';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSortableItem } from './item.styles';

export interface ItemProps {
  id: string;
  content: Project;
}

const Item = forwardRef(({ id, content }: ItemProps) => {
  const navigate = useNavigate();
  return (
    <StyledSortableItem id={id}>
      <CardKanban
        id={content.id}
        pursuitName={content.name || 'none'}
        accountName={content.account?.name || 'none'}
        portfolioName={content.account?.portfolio?.name || 'none'}
        usaPointOfContact={content.usaPointOfContact}
        handler={() => navigate(`edit/${content.id}`)}
        dimension={{
          team: {
            status: content.team?.status || 'Not Defined',
            observations: content.team?.observations || 'No observations',
          },
          plan: {
            status: content.plan?.status || 'Not Defined',
            observations: content.plan?.observations || 'No observations',
          },
          process: {
            status: content.process?.status || 'Not Defined',
            observations: content.process?.observations || 'No observations',
          },
          QA: {
            status: content.QA?.status || 'Not Defined',
            observations: content.QA?.observations || 'No observations',
          },
          gut: {
            status: content.gut?.status || 'Not Defined',
            observations: content.gut?.observations || 'No observations',
          },
        }}
        lastUpdated={content?.statusChangeDate?.toDateString() || ''}
      />
    </StyledSortableItem>
  );
});

export default Item;
