import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue-500"]};
  }

  body {
    background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;

