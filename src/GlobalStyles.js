import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
      font-size: 64px;
  }

  h2 {
      font-size: 48px;
  }

  h3 {
      font-size: 32px;
  }

  h4 {
      font-size: 24px;
  }
`;

export default GlobalStyles;
