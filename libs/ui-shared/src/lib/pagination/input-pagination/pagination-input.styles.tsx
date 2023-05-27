import styled from 'styled-components';

export const StyledPaginationInput = styled.div`
  font-family: ${(props) => props.theme.font};
  height: 28px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textPagination};
`;
