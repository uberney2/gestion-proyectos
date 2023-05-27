import { Project } from '@delia/frontend/core';
import {
  closestCorners,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import Container from '../kanban-components/container';
import Item from '../kanban-components/item';
import {
  getProjectAndStatus,
  GroupedPursuitsType,
  groupProjectsByStatus,
  isOfTypeStatus,
  sortByDate,
} from './kanban-logic';
import { StyledKanbanContainer } from '../pursuits-kanban.styles';

interface KanbanProps {
  projects: Project[];
  onItemChange?: (pursuitId: string, containerId: string) => void;
}

export function Kanban({ projects, onItemChange }: KanbanProps) {
  const groupedPursuitsInitialState: GroupedPursuitsType = {
    open: [],
    preanalysis: [],
    engineeringReview: [],
    inValidation: [],
    cancelled: [],
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const [items, setItems] = useState<GroupedPursuitsType>({
    ...groupedPursuitsInitialState,
  });
  const [activeId, setActiveId] = useState<string>('');
  const [activePursuit, setActivePursuit] = useState<Project>({
    name: '',
    id: '',
    usaPointOfContact: '',
    responsibleFromLatam: [],
    statusChangeDate: new Date(),
  });

  useEffect(() => {
    const groupedPursuits = groupProjectsByStatus(projects, {
      ...groupedPursuitsInitialState,
    });
    setItems(sortByDate(groupedPursuits));
  }, [projects]);

  function handleDragStart(event: any) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
    const { project: activeProject } = getProjectAndStatus(id, items);
    activeProject && setActivePursuit(activeProject);
  }

  function handleDragOver(event: any) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;
    const { status: activeStatus, project: activePursuit } =
      getProjectAndStatus(id, items);
    const overContainer = isOfTypeStatus(overId, items)
      ? overId
      : getProjectAndStatus(overId, items).status;
    if (!activeStatus || !overContainer || activeStatus === overContainer) {
      return;
    }
    if (activePursuit && overContainer) {
      setItems((prev) => {
        const unsortedItems = {
          ...prev,
          [activeStatus]: [
            ...prev[activeStatus]
              .filter((item: Project) => item.id !== active.id)
              .sort(),
          ],
          [overContainer]: [...prev[overContainer], activePursuit],
        };
        return sortByDate(unsortedItems);
      });
    }
  }

  function handleDragEnd(event: { active: any; over: any }) {
    const { over } = event;
    onItemChange &&
      onItemChange(activeId, over.data.current.sortable.containerId);
  }
  return (
    <div>
      <StyledKanbanContainer>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <Container title="Open" id="open" items={items.open} />
          <Container
            title="Preanalysis"
            id="preanalysis"
            items={items.preanalysis}
          />
          <Container
            title="Engineering Review"
            id="engineeringReview"
            items={items.engineeringReview}
          />
          <Container
            title="In Validation"
            id="inValidation"
            items={items.inValidation}
          />
          <Container title="Cancelled" id="cancelled" items={items.cancelled} />
          <DragOverlay>
            {activeId ? <Item id={activeId} content={activePursuit} /> : null}
          </DragOverlay>
        </DndContext>
      </StyledKanbanContainer>
    </div>
  );
}
