import styled from 'styled-components';

export const StyledGenericInputError = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.textError};
  text-align: start;
`;
