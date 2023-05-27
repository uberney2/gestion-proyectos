import styled from 'styled-components';

export const StyledKeyPeopleListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgPrimary};
  table {
    min-height: 280px;
  }
  thead {
    tr {
      height: 50px;
      padding-top: 14px;
    }
  }
  tr {
    padding-right: 200px;
    height: 100px;
  }
  th {
    :first-child {
      padding-left: 84px;
    }
  }
  th,
  td {
    font-size: 14px;
    :first-child {
      display: flex;
      gap: 24px;
    }
    :last-child {
      display: flex;
      justify-content: center;
      gap: 55px;
      position: absolute;
      right: 40px;
    }
  }
  td:nth-child(4) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
  }
`;

export const StyledSubtitleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  h3 {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
  padding: 40px 18px 15px;
`;
