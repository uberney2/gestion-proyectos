import styled from 'styled-components';

export const StyledPursuitsKanbanTitle = styled.h2`
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 12px 18px 24px;
`;

export const StyledPursuitsKanbanContainer = styled.div`
  font-family: ${(props) => props.theme.font};
`;

export const StyledPursuitsKanbanHeading = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0 18px 36px;
`;

export const StyledPursuitsKanbanInputs = styled.div`
  display: flex;
  column-gap: 24px;

  label {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 330px;
    row-gap: 8px;
  }
`;

export const StyledKanbanContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgPrimary};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  padding: 16px 18px;
`;
