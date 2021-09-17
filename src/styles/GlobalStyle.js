import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: #767676;
    background: ${(props) => props.theme.gradientBackground};
    font-family: "Lato", sans-serif;
    height: 100%;
  }

  h1 {
    font-family: "Playfair Display";
  }
`;

export default GlobalStyle;
