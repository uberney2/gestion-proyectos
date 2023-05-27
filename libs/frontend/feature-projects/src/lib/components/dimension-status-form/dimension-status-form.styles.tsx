import styled from 'styled-components';

export const StyledContainerStatusForm = styled.div`
  display: grid;
  grid-row-gap: 40px;
  padding-right: 12px;
  width: 33%;
`;

export const StyledStatusTitle = styled.h3`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 80px 0 40px;
`;

export const StyledItemsForm = styled.div`
  display: flex;
  column-gap: 24px;
`;
