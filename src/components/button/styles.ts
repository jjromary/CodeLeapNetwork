import styled from "styled-components";

interface StylesButtonProps {
  width: string;
  height: string;
  actionButton: "create" | "cancel" | "delete" | "edit" | "login";
}

export const Container = styled.div<StylesButtonProps>`
  width: ${(props) => (props.actionButton === "login" ? "50%" : "100%")};
  display: flex;
  justify-content: right;
  margin: 1rem 0;

  button {
    all: unset;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: 1px solid
      ${(props) =>
        props.actionButton === "cancel" || props.actionButton === "login"
          ? props.theme["gray-500"]
          : ""};
    border-radius: 8px;

    background-color: ${(props) =>
      props.actionButton === "create"
        ? props.theme["blue-500"]
        : props.actionButton === "cancel"
        ? props.theme["white"]
        : props.actionButton === "delete"
        ? props.theme["red-500"]
        : props.actionButton === "edit"
        ? props.theme["green-500"]
        : props.actionButton === "login"
        ? props.theme["white"]
        : ""};

    color: ${(props) =>
      props.actionButton === "cancel" || props.actionButton === "login"
        ? props.theme["black"]
        : props.theme["white"]};
    font-style: normal;
    font-weight: ${(props) => (props.actionButton === "login" ? 400 : 700)};
    font-size: 1rem;
    text-align: center;
    cursor: pointer;

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme["blue-500"]};
    }
  }
`;

