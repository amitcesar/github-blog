import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "./Router";
import { defaultTheme } from "./styles/global";
import { GlobalStyle } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
