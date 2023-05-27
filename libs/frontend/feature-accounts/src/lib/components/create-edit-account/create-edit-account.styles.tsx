import styled from 'styled-components';

export const StyledAccountsContainer = styled.div`
  height: calc(100vh - 68px);
  background-color: ${(props) => props.theme.colors.bgPrimary};
`;

export const StyledAccountsTitle = styled.h2`
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 40px 18px 16px;
`;

export const StyledAccountsSubTitle = styled.h3`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 40px 18px 0;
`;
