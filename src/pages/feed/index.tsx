import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { BoxModel } from "../../components/boxModel"
import { Button } from "../../components/button"
import { PostCard } from "../../components/postCard"
import { Title } from "../../components/title"
import { api } from "../../lib/axios"
import { Container, ContainerFildsForm, ContainerInput, ContainerLabel, ContainerTextArea, ContentCreatePost, ContentPostList, Header } from "./styles"

interface Posts {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [titleNewPost, setTitleNewPost] = useState('')
  const [contentNewPost, setContentNewPost] = useState('')
  const loadUserName = localStorage.getItem('user')

  const { register, handleSubmit } = useForm()

  function handleCreateNewPost(data: any) {
    console.log(data)
  }


  const loadposts = async () => {
    const response = await api.get(`/`, {
      params: {
        limit: 15
      }
    })
    setPosts(response.data.results)
  }

  const createPost = async () => {
    api.post(`/`, {
      username: "user",
      title: titleNewPost,
      content: contentNewPost,
    })
  }

  useEffect(() => {
    loadposts()
  }, [])

  console.log(posts)
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
            title="What’s on your mind?"
          />

          <ContainerFildsForm>

            <form onSubmit={handleSubmit(handleCreateNewPost)}>
              <ContainerLabel>
                Title
              </ContainerLabel>
              <ContainerInput
                placeholder='Hello World'
                height='32px'
                type="text"
                {...register('title')}
              />

              <ContainerLabel>
                Content
              </ContainerLabel>
              <ContainerTextArea
                placeholder="Content Here"
                heightTextArea="74px"
                {...register('content')}

              />
              <Button
                nameButton="Create"
                width="120px"
                height="32px"
                actionButton="create"
                type="submit"
              />

            </form>

          </ContainerFildsForm>
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