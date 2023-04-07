import { Container } from "./styles";

export function BoxModel() {
  return (
    <Container>
      <span>
        Welcome to CodeLeap network!
      </span>

      <label>
        Please enter your username
      </label>
      <input placeholder="John doe" />

    </Container>
  )
}