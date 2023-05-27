// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PursuitsKanban } from '@delia/frontend/feature-projects';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { dependencies } from '../../app';
import { usePlocState } from '../../shared/hooks/use-ploc-state';

export function ProjectsView() {
  const pursuitId = uuid();
  const navigate = useNavigate();

  const projectsPloc = dependencies.projectsPloc;
  const buOwnersPloc = dependencies.buOwnersPloc;
  const portfoliosPloc = dependencies.portfoliosPloc;

  const projectsState = usePlocState(projectsPloc);
  const portfoliosState = usePlocState(portfoliosPloc);
  const buOwnersState = usePlocState(buOwnersPloc);

  const handleNew = () => {
    navigate('create/:pursuitId'.replace(':pursuitId', pursuitId));
  };
  return (
    <PursuitsKanban
      portfoliosPloc={portfoliosPloc}
      portfoliosState={portfoliosState}
      buOwnersPloc={buOwnersPloc}
      buOwnersState={buOwnersState}
      handleNew={handleNew}
      projectsPloc={projectsPloc}
      projectState={projectsState}
    />
  );
}

export default ProjectsView;
