import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
     background: ${({theme}) => theme['base-background']};
    color: ${({theme}) => theme['base-text']};
  }
  
  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`; 