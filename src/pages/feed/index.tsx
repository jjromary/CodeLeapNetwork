import { BoxModel } from "../../components/boxModel"
import { Button } from "../../components/button"
import { FieldForm } from "../../components/fieldForm"
import { PostCard } from "../../components/postCard"
import { Title } from "../../components/title"
import { Container, ContentCreatePost, ContentPostList, Header } from "./styles"

export default function Feed() {
  return (
    <Container>
      <Header>
        CodeLeap Network
      </Header>

      <BoxModel
        width="94%"
        height="334px"
      >
        <ContentCreatePost>

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
            actionButton="create"
            type="submit"
          />
        </ContentCreatePost>

      </BoxModel>

      <ContentPostList>
        <BoxModel
          width="94%"
          height="316px"
        >
          <PostCard />
        </BoxModel>
        <BoxModel
          width="94%"
          height="316px"
        >
          <PostCard />
        </BoxModel>
        <BoxModel
          width="94%"
          height="316px"
        >
          <PostCard />
        </BoxModel>
      </ContentPostList>


    </Container>
  )
}