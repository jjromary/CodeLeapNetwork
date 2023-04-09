import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Title } from "../../components/title";
import { Container, ContainerInput, ContainerLabel, Content } from "./styles";

export default function Home() {
  const [user, setUser] = useState('')

  const navigate = useNavigate();

  function storageUser(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  function handleCreateUser() {
    storageUser('user', user)
    navigate("/feed");
  }

  return (
    <Container>
      <Content>
        <Title
          title="Welcome to CodeLeap network!"
        />
        <ContainerLabel>
          Please enter your username
        </ContainerLabel>
        <ContainerInput
          placeholder='Hello World'
          height='32px'
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
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