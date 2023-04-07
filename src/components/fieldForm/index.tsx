import { Container } from "./styles";

interface TFieldFormProps {
  label: string;
  placeholder: string;
  height: string;
  type: "input" | "text-area";
}

export function FieldForm({ label, placeholder, height, type }: TFieldFormProps) {
  return (
    <Container height={height}>
      <label>
        {label}
      </label>
      {type === "input" ?
        <input placeholder={placeholder} />
        :
        <textarea placeholder={placeholder} />
      }

    </Container>
  )
}