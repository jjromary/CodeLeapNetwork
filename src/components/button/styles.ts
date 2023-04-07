import styled from "styled-components";

interface StylesButtonProps {
  width: string;
  height: string;
}

export const Container = styled.div<StylesButtonProps>`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-bottom: 1.5rem 0;

  button {
    all: unset;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 8px;
    background-color: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["white"]};
    font-style: normal;
    font-weight: 700;
    text-align: center;
    margin-top: 1rem;
  }
`;

