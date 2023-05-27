import styled from 'styled-components';
import { css } from 'styled-components';

const good = css`
  background-color: ${(props) => props.theme.colors.statusGreen200};
  color: ${(props) => props.theme.colors.statusGreen800};
`;
const warning = css`
  background-color: ${(props) => props.theme.colors.statusYellow200};
  color: ${(props) => props.theme.colors.statusYellow800};
`;
const bad = css`
  background-color: ${(props) => props.theme.colors.statusRed200};
  color: ${(props) => props.theme.colors.statusRed800};
`;
const notDefined = css`
  background-color: ${(props) => props.theme.colors.statusGray};
  color: ${(props) => props.theme.colors.graySecondary};
`;

export const StyledStatusLabel = styled.span`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  min-width: 62.67px;
  min-height: 24px;
  ${(props) => {
    switch (props.className) {
      case 'Good':
        return good;
      case 'Warning':
        return warning;
      case 'Bad':
        return bad;
      case 'Not Defined':
        return notDefined;
      default:
        return;
    }
  }}
`;
