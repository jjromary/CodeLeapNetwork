import { Container } from "./styles";

interface ButtonProps {
  nameButton: string;
  width: string;
  height: string;
  actionButton: "create" | "cancel" | "delete" | "edit" | "login";
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}


export function Button({
  nameButton,
  height,
  width,
  type,
  onClick,
  actionButton,
}: ButtonProps) {
  return (
    <Container height={height} width={width} actionButton={actionButton}>
      <button tabIndex={0} type={type} onClick={onClick}>
        {nameButton}
      </button>
    </Container>
  )
}