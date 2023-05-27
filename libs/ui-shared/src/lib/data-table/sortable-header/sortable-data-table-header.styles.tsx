import styled from 'styled-components';
export const StyledSortableDataTableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    fill: ${(props) => props.theme.colors.black};
  }
  &.asc {
    svg {
      transform: rotate(180deg);
      transition: 0.2s;
      fill: ${(props) => props.theme.colors.redSecondary};
    }
  }

  &.desc {
    svg {
      transform: rotate(0);
      transition: 0.2s;
    }
  }
  &.asc,
  &.desc {
    svg {
      fill: ${(props) => props.theme.colors.redSecondary};
    }
  }

  &.isSortable {
    cursor: pointer;
  }
`;
