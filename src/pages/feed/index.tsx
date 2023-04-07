import { FieldForm } from "../../components/FieldForm"
import { BoxModel } from "../../components/boxModel"
import { Button } from "../../components/button"
import { Title } from "../../components/title"
import { Container, Content, Header } from "./styles"

export default function Feed() {
  return (
    <Container>
      <Header>
        CodeLeap Network
      </Header>

      <Content>
        <BoxModel
          width="100%"
          height="334px"
        >
          <Title
            title="What's on your mind?"
          />
          <FieldForm
            type="input"
            placeholder="Title"
            label="Hello world"
            height="32px"
          />

          <FieldForm
            type="text-area"
            placeholder="Content"
            label="Content here"
            height="74px"
          />


          <Button
            nameButton="Create"
            width="120px"
            height="32px"
          />

        </BoxModel>
      </Content>

    </Container>
  )
}