import { StyledKeyPeopleRender } from './key-people-render.styles';

/* eslint-disable-next-line */
export interface KeyPeopleRenderProps {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
}

export function KeyPeopleRender({ name, role }: KeyPeopleRenderProps) {
  return (
    <StyledKeyPeopleRender>
      {name}
      <p>{role}</p>
    </StyledKeyPeopleRender>
  );
}

export default KeyPeopleRender;
