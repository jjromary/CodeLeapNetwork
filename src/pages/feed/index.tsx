import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as zod from 'zod'
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

const newPostValidationSchema = zod.object({
  title: zod.string().min(1, 'Please enter at least 3 characters!'),
  content: zod.string().min(3, 'Please enter at least 3 characters!')
})

type NewPostFormData = zod.infer<typeof newPostValidationSchema>

export default function Feed() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [updatedPost, setUpdatedPost] = useState(false);
  const loadUserName = localStorage.getItem('user')

  const { register, handleSubmit } = useForm<NewPostFormData>({
    resolver: zodResolver(newPostValidationSchema),
    defaultValues: {
      title: '',
      content: '',
    }
  })

  const loadposts = async () => {
    const response = await api.get(`/`, {
      params: {
        limit: 15
      }
    })
    setPosts(response.data.results)
    setTimeout(() => {
      setUpdatedPost(false);
    }, 500);
  }

  const handleCreateNewPost = (data: NewPostFormData) => {
    createPost(data.title, data.content)
    console.log(data)
  }



  const createPost = async (title: string, content: string) => {
    await api.post(`/`, {
      username: loadUserName,
      title: title,
      content: content,
    })
    setUpdatedPost(true);
  }

  useEffect(() => {
    loadposts()
  }, [updatedPost])

  console.log(updatedPost)
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