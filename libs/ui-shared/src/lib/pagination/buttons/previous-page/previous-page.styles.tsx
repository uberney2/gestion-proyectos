import styled from 'styled-components';

export const StyledPreviousPage = styled.button`
  width: 8px;
  height: 14px;
  cursor: pointer;
  stroke: ${(props) => props.theme.colors.redPrimary};
  border: none;
  background-color: transparent;
  &.hidden {
    visibility: hidden;
  }
`;
