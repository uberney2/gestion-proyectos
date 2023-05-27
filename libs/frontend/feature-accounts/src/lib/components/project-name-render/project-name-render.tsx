import { StyledProjectNameRender } from './project-name-render.styles';

/* eslint-disable-next-line */
export interface ProjectNameRenderProps {
  name?: string;
  portfolio?: string;
}

export function ProjectNameRender({ name, portfolio }: ProjectNameRenderProps) {
  return (
    <StyledProjectNameRender>
      {name}
      <p>{portfolio}</p>
    </StyledProjectNameRender>
  );
}

export default ProjectNameRender;
