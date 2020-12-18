import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body.active {
    overflow-y: hidden;
  }
  
  h2,
  h3,
  h4 {
    color: #283533;
  }
  
  h1 {
    font-size: 64px;
    line-height: 70px;
  }
  
  h2 {
    font-size: 48px;
  }
  
  h3 {
    font-size: 32px;
    font-weight: 600;
    line-height: 56px;
  }
  
  h4 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    color: #333;
    line-height: 30px;
  }

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 1366px) {
    h1 {
      font-size: 48px;
      line-height: 56px;
    }
    
    h2 {
      font-size: 32px;
    }
    
    h3 {
      font-size: 24px;
    }
    
    h4 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 768px) {

    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    
    h2 {
      font-size: 24px;
    }
    
    h3 {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 480px) {
  }
  `;

export default GlobalStyles;
