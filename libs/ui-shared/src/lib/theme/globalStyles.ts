import { createGlobalStyle } from 'styled-components';
import DefaultTheme from './styled';

export type MyProps = {
  theme: typeof DefaultTheme;
};

export const GlobalStyles = createGlobalStyle<MyProps>`
    html {
        box-sizing: border-box;
    }
    body {
        font-family: ${(props) => props.theme.font};
        margin: 0;
        padding: 0;
    }
`;
