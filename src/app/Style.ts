import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
    border: none;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  button {
    cursor: pointer;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
`;

export default GlobalStyle;
