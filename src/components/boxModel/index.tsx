import { TextInput } from "../textInput";
import { Container } from "./styles";

export function BoxModel() {
  return (
    <Container>
      <span>
        Welcome to CodeLeap network!
      </span>

      <TextInput />

      <div>
        <button>
          ENTER
        </button>
      </div>

    </Container>
  )
}