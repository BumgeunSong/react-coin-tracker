import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Router from './routes/Router';
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from './GlobalStyle';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from './atoms';

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider theme={useRecoilValue(isDarkModeState) ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
