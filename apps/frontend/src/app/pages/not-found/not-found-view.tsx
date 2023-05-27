import styled from 'styled-components';

const StyledNotFound = styled.div`
  color: red;
`;

export function NotFoundView() {
  return (
    <StyledNotFound>
      <h1>404 Page not found</h1>
    </StyledNotFound>
  );
}

export default NotFoundView;
