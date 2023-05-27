import styled from 'styled-components';

export const StyledPaginationNumber = styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  border-radius: 2px;
  height: 28px;
  border: none;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  &.selected {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.redPrimary};
    min-width: 28px;
  }
  &.nonselected {
    color: ${(props) => props.theme.colors.black};
    background-color: transparent;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.tanPrimary};
    }
  }
`;
