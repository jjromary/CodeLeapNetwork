import { ReactNode } from "react";
import { Container } from "./styles";

interface BoxModelProps {
  children: ReactNode;
  width: string;
  height: string;
}

export function BoxModel({ children, height, width }: BoxModelProps) {
  return (
    <Container height={height} width={width}>
      {children}
    </Container>
  )
}