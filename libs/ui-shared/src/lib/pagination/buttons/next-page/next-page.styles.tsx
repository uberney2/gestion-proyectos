import styled from 'styled-components';

export const StyledNextPage = styled.button`
  border: none;
  width: 8px;
  height: 14px;
  cursor: pointer;
  stroke: ${(props) => props.theme.colors.redPrimary};
  background-color: transparent;
  &.hidden {
    visibility: hidden;
  }
`;
