import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,:after,:before {
      box-sizing: border-box
  }

  html {
      font-size: 10px;
      -webkit-tap-highlight-color: rgba(0,0,0,0)
  }
  body {
    margin: 0;
    background-color: ${(props) => props.theme.palette.bodyBg};
    color: ${(props) => props.theme.palette.textColor};
    font-size: ${(props) => props.theme.fontSize};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

export default GlobalStyle;
