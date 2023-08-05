import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/Home";
import { defaultTheme } from "./styles/global";
import { GlobalStyle } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
      <GlobalStyle />
    </ThemeProvider>
  );
}
