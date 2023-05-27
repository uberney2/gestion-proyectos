import styled from 'styled-components';

export const StyledModalcontainer = styled.div`
  font-family: ${(props) => props.theme.font};
`;

export const StyledModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.graySecondary};
  color: ${(props) => props.theme.colors.white};
  max-height: 68px;
  padding: 24px 30px;
`;

export const StyledModalContent = styled.div`
  padding: 24px 2px;
`;
