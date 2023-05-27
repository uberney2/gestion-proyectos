import styled from 'styled-components';

export const StyledGenericInput = styled.input`
  background-color: ${(props) => props.theme.colors.bgPrimary};
  border-style: none;
  color: ${(props) => props.theme.colors.bgTertiary};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  outline: none;
  padding: 0 11px;
  text-align: start;
  width: 100%;
  &.sm {
    padding: 0 3px;
    text-align: center;
  }
  &:disabled {
    color: ${(props) => props.theme.colors.bgSecondary};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.tanSecondary};
  }
  &.error {
    border-color: ${(props) => props.theme.colors.redSecondary};
    background-color: ${(props) => props.theme.colors.redHover};
    color: ${(props) => props.theme.colors.bgTertiary};
  }
`;

export const StyledInputIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledGenericInputContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgPrimary};
  border-bottom: 1px solid ${(props) => props.theme.colors.bgSecondary};
  gap: 3px;
  height: 42px;
  &:focus-within {
    border-color: ${(props) => props.theme.colors.tanSecondary};
  }
  &.error {
    border-color: ${(props) => props.theme.colors.redSecondary};
    background-color: ${(props) => props.theme.colors.redHover};
    color: ${(props) => props.theme.colors.bgTertiary};
  }
`;
