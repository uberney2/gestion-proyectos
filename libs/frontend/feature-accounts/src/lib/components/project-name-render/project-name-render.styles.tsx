import styled from 'styled-components';

export const StyledProjectNameRender = styled.div`
  color: ${(props) => props.theme.colors.graySecondary};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  p {
    color: ${(props) => props.theme.colors.bgTertiary};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-size: 14px;
    margin: 0;
  }
`;
