import styled from 'styled-components';

export const StyledLoader = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: ${(props) => props.theme.colors.grayTertiary} #0000
    ${(props) => props.theme.colors.grayTertiary} #0000;
  border-radius: 50%;
  box-sizing: border-box;
  animation: 1s rotate linear infinite;

  &:before,
  &:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    border: 5px solid transparent;
    border-bottom-color: ${(props) => props.theme.colors.grayTertiary};
    transform: translate(-6px, 9px) rotate(-40deg);
  }
  &:after {
    border-color: ${(props) => props.theme.colors.grayTertiary} #0000 #0000
      #0000;
    transform: translate(15px) rotate(-45deg);
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledLoaderContainer = styled.div`
  color: ${(props) => props.theme.colors.grayTertiary};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-family: ${(props) => props.theme.font};
    margin-top: 12px;
  }
`;
