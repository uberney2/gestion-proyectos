import styled from 'styled-components';

export const StyledBreadcrumbComponent = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  height: 38px;
  gap: 12px;
  padding-left: 18px;
`;

export const StyledBreadcrumbItem = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 600px;

  &.unselected {
    cursor: pointer;
  }
  &.unselected:hover {
    color: ${(props) => props.theme.colors.goldSecondary500};
  }
  &.selected {
    font-weight: ${(props) => props.theme.fontWeights.semibold};
  }
`;

export const StyledSeparator = styled.div`
  stroke: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  align-items: center;
`;
