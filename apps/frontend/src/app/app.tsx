import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '@delia/ui-shared';
import AppRouter from './pages/Routes/app-router';
import { environment } from '../environments/environment';
import { getDependenciesProviders } from '@delia/frontend/core';
const StyledApp = styled.div`
  // Your style here
`;
const dependencies = getDependenciesProviders({
  baseURL: environment.apiBaseURL,
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <AppRouter />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
export { dependencies };
