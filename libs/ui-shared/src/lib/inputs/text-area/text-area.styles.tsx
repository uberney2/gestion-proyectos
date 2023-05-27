import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  border-bottom: 1px solid ${(props) => props.theme.colors.bgSecondary};
  background-color: ${(props) => props.theme.colors.bgPrimary};
  color: ${(props) => props.theme.colors.bgTertiary};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.sm};
  height: 100%;
  outline: none;
  padding: 11px 16px;
  width: 100%;
  resize: none;

  &:disabled {
    color: ${(props) => props.theme.colors.bgSecondary};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.tanSecondary};
  }
  &.error {
    border-color: ${(props) => props.theme.colors.redSecondary};
    color: ${(props) => props.theme.colors.bgTertiary};
  }
`;
