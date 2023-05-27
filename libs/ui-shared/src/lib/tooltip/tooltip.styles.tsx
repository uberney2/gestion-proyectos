import styled from 'styled-components';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export const StyledTooltip = styled(ReactTooltip)`
  &.react-tooltip {
    background-color: ${(props) => props.theme.colors.bgPrimary};
    width: 280px;
    padding: 16px;

    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-family: ${(props) => props.theme.font};
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }
`;
