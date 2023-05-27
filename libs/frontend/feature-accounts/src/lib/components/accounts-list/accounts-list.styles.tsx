import styled from 'styled-components';

export const StyledAccountsListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgPrimary};
  font-family: ${(props) => props.theme.font};
  table {
    min-height: 630px;
  }
  tr {
    padding-right: 30px;
  }
  th,
  td {
    :last-child {
      position: absolute;
      right: 30px;
    }
  }
  thead{
    margin-top: 30px;
    tr {
      :last-child {
        align-items: start;
    }
  }
`;

export const StyledAccountsListHeading = styled.div`
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 30px 18px 0;
`;
