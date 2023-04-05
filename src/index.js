import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import App from "./App";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
