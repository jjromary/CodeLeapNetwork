import { Container } from "./styles";

interface ButtonProps {
  nameButton: string;
  width: string;
  height: string;
}

export function Button({ nameButton, height, width }: ButtonProps) {
  return (
    <Container height={height} width={width}>
      <button>
        {nameButton}
      </button>
    </Container>
  )
}