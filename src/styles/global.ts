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
    background-color: ${(props) => props.theme["gray-200"]};
    color: ${(props) => props.theme["black"]};
    -webkit-font-smoothing: antialiased;
    scroll-behavior: auto;
  }

  body, input, text-area, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

  .react-modal-delete-overlay {
    background: rgba(119,119,119, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-delete-content {
    width: 100%;
    max-width: 660px;
    height: 146px;
    margin: 0 1.5rem;
    background: ${(props) => props.theme["white"]};
    border-radius: 16px;
  }

  .react-modal-edit-overlay {
    background: rgba(119,119,119, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-edit-content {
    width: 100%;
    max-width: 660px; 
    height: 334px;
    margin: 0 1.5rem;
    background: ${(props) => props.theme["white"]};
    border-radius: 16px;
  }
`;

