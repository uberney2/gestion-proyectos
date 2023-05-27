import styled from 'styled-components';

export const StyledInputIcon = styled.div`
  stroke: ${(props) => props.theme.colors.redSecondary};
  display: flex;
  margin-right: 11px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  &.error {
    stroke: ${(props) => props.theme.colors.redSecondary};
  }
`;
