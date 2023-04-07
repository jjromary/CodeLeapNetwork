import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: right;

  button {
    all: unset;
    width: 111px;
    height: 32px;
    border-radius: 8px;
    background-color: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["white"]};
    font-style: normal;
    font-weight: 700;
    text-align: center;
    margin-top: 1rem;
  }
`;

