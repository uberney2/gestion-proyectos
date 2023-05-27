import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendCoreProps {}

const StyledFrontendCore = styled.div`
  color: pink;
`;

export function FrontendCore(props: FrontendCoreProps) {
  return (
    <StyledFrontendCore>
      <h1>Welcome to FrontendCore!</h1>
    </StyledFrontendCore>
  );
}

export default FrontendCore;
