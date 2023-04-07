import { Container } from "./styles";

export function TextInput() {
  return (
    <Container>
      <label>
        Please enter your username
      </label>
      <input placeholder="John doe" />
    </Container>
  )
}