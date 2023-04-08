import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { FieldForm } from "../../components/fieldForm";
import { Title } from "../../components/title";
import { Container, Content } from "./styles";

export default function Home() {
  const navigate = useNavigate();

  function handleCreateUser() {
    navigate("/feed");
  }

  return (
    <Container>
      <Content>

        <Title
          title="Welcome to CodeLeap network!"
        />
        <FieldForm
          type="input"
          placeholder="John doe"
          label="Please enter your username"
          height="32px"
        />
        <Button
          nameButton="ENTER"
          width="111px"
          height="32px"
          actionButton="create"
          type="button"
          onClick={handleCreateUser}
        />

      </Content>
    </Container>
  )
}