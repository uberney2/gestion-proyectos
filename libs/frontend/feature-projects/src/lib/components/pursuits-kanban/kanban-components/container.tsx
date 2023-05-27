import { Project } from '@delia/frontend/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  StyledColumnContainer,
  StyledContainer,
  StyledTitleContainer,
} from './container.styles';
import SortableItem from './sortable-item';

export interface SortableItemProps {
  id: any;
  items: Project[];
  title: string;
}

export default function Container({ id, items, title }: SortableItemProps) {
  const { setNodeRef } = useSortable({ id });

  const itemsIds = items.map((pursuit) => pursuit.id);

  return (
    <SortableContext
      id={id}
      items={itemsIds}
      strategy={verticalListSortingStrategy}
    >
      <StyledColumnContainer>
        <StyledTitleContainer>
          {title} <span>({items.length})</span>
        </StyledTitleContainer>
        <StyledContainer ref={setNodeRef}>
          {items.map((pursuit: Project) => (
            <SortableItem key={pursuit.id} id={pursuit.id} content={pursuit} />
          ))}
        </StyledContainer>
      </StyledColumnContainer>
    </SortableContext>
  );
}
