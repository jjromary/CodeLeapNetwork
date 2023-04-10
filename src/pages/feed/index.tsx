import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as zod from 'zod'
import { BoxModel } from "../../components/boxModel"
import { Button } from "../../components/button"
import Loading from '../../components/loading'
import { PostCard } from "../../components/postCard"
import { Title } from "../../components/title"
import { api } from "../../lib/axios"
import { Container, ContainerFildsForm, ContainerInput, ContainerLabel, ContainerTextArea, ContentCreatePost, ContentPostList, ErroMessage, Header, Warning } from "./styles"

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
  const [totalPost, setTotalPost] = useState(Number)
  const [isfinalPost, setIsFinalPost] = useState(false)

  const [limitPage, setLimitPage] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  const loadUserName = localStorage.getItem('user')
  const navigate = useNavigate();

  //Infinity scroll
  useEffect(() => {
    const intersactionObserver = new IntersectionObserver((entries) => {

      if (entries.some((entry) => entry.isIntersecting)) {
        setLimitPage(limitPageInsiderState => limitPageInsiderState + 3)
      }
    });

    intersactionObserver.observe(document.querySelector('#limiter')!)

    return () => intersactionObserver.disconnect()
  }, [])

  const handleRedirectToLogin = () => {
    navigate("/");
  }

  const handleLogout = () => {
    if (window.confirm("Confirm logout?")) {
      localStorage.removeItem('user')
      toast.success("Logout confirmed!")
      navigate("/");
    } else { }
  }

  const verifyFinalList = () => {
    if (posts.length === totalPost) {
      setIsFinalPost(true)
    } else {
      setIsFinalPost(false)
    }
  }

  const loadposts = async () => {
    const response = await api.get(`/`, {
      params: {
        limit: limitPage,
      },
    })
    setPosts(response.data.results)
    setTotalPost(response.data.count)
    verifyFinalList()
    setTimeout(() => {
      setUpdatedPost(false);
    }, 500);
  }

  const handleCreateNewPost = (data: NewPostFormData) => {
    createPost(data.title, data.content)
    toast.success("Post created!")
  }

  const createPost = async (title: string, content: string) => {
    await api.post(`/`, {
      username: loadUserName,
      title: title,
      content: content,
    })
    setUpdatedPost(true);
  }

  //start postlist in feed and updated list when new post been created
  useEffect(() => {
    loadposts()
    setIsLoading(false)
  }, [updatedPost, limitPage])

  const { register, handleSubmit, formState } = useForm<NewPostFormData>({
    resolver: zodResolver(newPostValidationSchema),
    defaultValues: {
      title: '',
      content: '',
    }
  })

  return (
    <Container>
      {!!loadUserName === true ?
        (<>
          <Header>
            CodeLeap Network
            <Button
              nameButton="Logout"
              width="111px"
              height="32px"
              actionButton="login"
              type="button"
              onClick={handleLogout} />
          </Header>
          <BoxModel
            width="94%"
            height="334px"
          >
            <ContentCreatePost>
              <Title
                title="What’s on your mind?" />
              <ContainerFildsForm>

                <form onSubmit={handleSubmit(handleCreateNewPost)}>
                  <ContainerLabel>
                    Title
                  </ContainerLabel>
                  <ErroMessage>{formState.errors?.title?.message}</ErroMessage>
                  <ContainerInput
                    placeholder='Hello World'
                    height='32px'
                    type="text"
                    {...register('title')}
                  />

                  <ContainerLabel>
                    Content
                  </ContainerLabel>
                  <ErroMessage>{formState.errors?.content?.message}</ErroMessage>
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
                    type="submit" />

                </form>

              </ContainerFildsForm>
            </ContentCreatePost>

          </BoxModel><ContentPostList>

            {posts && posts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  created_datetime={post.created_datetime}
                  title={post.title}
                  content={post.content} />
              )
            })}

          </ContentPostList>

          {isfinalPost ?
            "There are no more posts"
            : ''}

          {/* Limit for start infinite scroll */}
          {!isLoading && !isfinalPost && <Loading />}
          <div id='limiter' style={{ marginTop: '1rem' }} />
        </>

        ) : (
          <>
            <Header>
              CodeLeap Network
              <Button
                nameButton="Login"
                width="111px"
                height="32px"
                actionButton="login"
                type="button"
                onClick={handleRedirectToLogin} />
            </Header>
            <BoxModel
              width="94%"
              height="100vh"
            >
              <Warning>
                Login to view posts
              </Warning>
            </BoxModel>
          </>
        )}

    </Container>

  )
}
