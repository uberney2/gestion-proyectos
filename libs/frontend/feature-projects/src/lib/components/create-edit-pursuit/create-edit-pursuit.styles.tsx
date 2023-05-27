import styled from 'styled-components';

export const StyledPursuitsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgPrimary};
`;

export const StyledPursuitsTitle = styled.h2`
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 40px 18px 16px;
`;

export const StyledPursuitsSubTitle = styled.h3`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 40px 18px 0;
`;
