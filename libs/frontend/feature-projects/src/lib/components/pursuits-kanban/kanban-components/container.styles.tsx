import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.statusGray};
  font-size: 13px;
  padding-right: 8px;
  height: 90vh;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.bgSecondary};
    margin-top: 5Spx;
  }

  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.statusGray};
    width: 6px;
    margin: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.bgPrimary};
    height: 60px;
  }
`;

export const StyledTitleContainer = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 10px;
  font-size: 13px;

  span {
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }
`;

export const StyledColumnContainer = styled.div`
  background-color: ${(props) => props.theme.colors.statusGray};
  padding: 16px 8px 4px;
`;
