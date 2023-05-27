import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 17px;
  border-radius: 2px;
  height: 40px;
  width: 170px;
  cursor: pointer;
  &.primary {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.redSecondary};
    border: none;
    &:hover {
      background-color: ${(props) => props.theme.colors.redHoverTwo};
    }
    &:active {
      background-color: ${(props) => props.theme.colors.redTertiary};
    }
    &:disabled {
      background-color: ${(props) => props.theme.colors.redDisabled};
    }
  }
  &.secondary {
    border: 1px solid ${(props) => props.theme.colors.redSecondary};
    color: ${(props) => props.theme.colors.redSecondary};
    background-color: transparent;
    &:hover {
      background-color: ${(props) => props.theme.colors.redHoverOpacity};
    }
    &:active {
      background-color: ${(props) => props.theme.colors.redSecondary};
      color: ${(props) => props.theme.colors.white};
    }
    &:disabled {
      border: 1px solid ${(props) => props.theme.colors.redDisabled};
      color: ${(props) => props.theme.colors.redDisabled};
    }
  }
`;

export const StyledIconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;
