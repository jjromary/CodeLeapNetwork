import { useEffect, useState } from "react"
import { BoxModel } from "../../components/boxModel"
import { Button } from "../../components/button"
import { FieldForm } from "../../components/fieldForm"
import { PostCard } from "../../components/postCard"
import { Title } from "../../components/title"
import { api } from "../../lib/axios"
import { Container, ContentCreatePost, ContentPostList, Header } from "./styles"

interface Posts {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export default function Feed({ id, username, created_datetime, title, content }: Posts) {
  const [posts, setPosts] = useState<Posts[]>([])

  const loadposts = async () => {
    const response = await api.get(`/`, {
      params: {
        limit: 15
      }
    })
    setPosts(response.data.results)
  }
  console.log(posts)

  useEffect(() => {
    loadposts()
  }, [])

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

        {posts && posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              username={post.username}
              created_datetime={post.created_datetime}
              title={post.title}
              content={post.content}
            />
          )
        })}

      </ContentPostList>


    </Container>
  )
}