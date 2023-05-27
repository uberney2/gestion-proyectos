import styled from 'styled-components';
import { StyledGenericInputContainer } from '../inputs/generic-input/generic-input.styles';
import { StyledPagination } from '../pagination/pagination.styles';

export const StyledDataTableContainer = styled.div`
  font-family: ${(props) => props.theme.font};
  margin: 0 18px 38px;
  ${StyledPagination} {
    justify-content: space-between;
    margin: 10px;
    position: absolute;
    bottom: 20px;
    overflow: hidden;
    width: 97%;
  }
`;

export const StyledDataTable = styled.table`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 24px 64px;
  filter: drop-shadow(0px 2px 10px rgba(50, 43, 43, 0.1));

  thead {
    text-align: left;
  }
  td,
  th {
    padding: 0 20px;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    /* min-height: 66px; */
  }
  tr {
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.colors.strokeGrid};
    height: 80px;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    :first-child {
      border: none;
    }
  }
  tbody {
    border: 1px solid ${(props) => props.theme.colors.strokeGrid};
    color: ${(props) => props.theme.colors.grayPrimary};
    border-radius: 4px;
  }

  ${StyledGenericInputContainer} {
    width: 253px;
    margin-top: 8px;
  }
`;

export const StyledEmptyMessage = styled.tbody`
  color: ${(props) => props.theme.colors.grayTertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: ${(props) => props.theme.fontWeights.normal};
  height: 80px;
`;

export const StyledDataTableTr = styled.tr`
  margin-bottom: 12px;
`;

export const StyledDataTableTd = styled.td`
  display: flex;
  align-items: center;
`;
