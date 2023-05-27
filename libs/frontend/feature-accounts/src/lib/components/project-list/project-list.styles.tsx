import styled from 'styled-components';

export const StyledProjectListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgPrimary};

  table {
    min-height: 280px;
  }
  thead {
    tr {
      height: 50px;
      padding-top: 14px;
      font-size: 14px;
    }
  }
  tr {
    padding-right: 200px;
    height: 80px;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
  th,
  td {
    :last-child {
      display: flex;
      justify-content: center;
      gap: 55px;
      position: absolute;
      right: 30px;
    }
  }
  td:nth-child(5) {
    display: flex;
    column-gap: 8px;
  }
`;

export const StyledSubtitle = styled.h3`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 48px 18px 20px;
`;

export const StyledDimensionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
