import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import * as zod from 'zod';
import { api } from '../../lib/axios';
import { Button } from '../button';
import { Title } from '../title';
import { Container, ContainerFildsForm, ContainerInput, ContainerLabel, ContainerTextArea, ContentActions, ContentButton } from './styles';

interface ModalEditProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idPostCard: number;
  username: string;
}

const editPostValidationSchema = zod.object({
  titleEdit: zod.string().min(1, 'Please enter at least 3 characters!'),
  contentEdit: zod.string().min(3, 'Please enter at least 3 characters!')
})

type NewPostFormData = zod.infer<typeof editPostValidationSchema>

Modal.setAppElement('#root')

export function ModalEdit({ isOpen, onRequestClose, idPostCard, username }: ModalEditProps) {
  const loadUserName = localStorage.getItem('user')

  const { register, handleSubmit } = useForm<NewPostFormData>({
    resolver: zodResolver(editPostValidationSchema),
    defaultValues: {
      titleEdit: '',
      contentEdit: '',
    }
  })

  const handleEditPost = (data: NewPostFormData) => {
    if (loadUserName !== username) {
      toast.error("You're not author this post!")
      return false
    }
    editPost(data.titleEdit, data.contentEdit)
    toast.success("Post edited!")
    onRequestClose()
  }

  const editPost = async (titleEdit: string, contentEdit: string) => {
    await api.patch(`/${idPostCard}/`, {
      title: titleEdit,
      content: contentEdit,
    })
  }

  return (
    <form onSubmit={handleSubmit(handleEditPost)}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-edit-overlay"
        className="react-modal-edit-content"
      >

        <Container>

          <Title
            title="Edit item"
          />
          <ContainerFildsForm>

            <ContainerLabel>
              Title
            </ContainerLabel>
            <ContainerInput
              placeholder='Hello World'
              height='32px'
              type="text"
              {...register('titleEdit')}
            />

            <ContainerLabel>
              Content
            </ContainerLabel>
            <ContainerTextArea
              placeholder="Content Here"
              heightTextArea="74px"
              {...register('contentEdit')}

            />
            <ContentButton>
              <ContentActions>

                <Button
                  nameButton="cancel"
                  width="120px"
                  height="32px"
                  actionButton="cancel"
                  type="button"
                  onClick={onRequestClose}
                />

                <Button
                  nameButton="Save"
                  width="120px"
                  height="32px"
                  actionButton="edit"
                  type="submit"
                />
              </ContentActions>
            </ContentButton>

          </ContainerFildsForm>
        </Container>

      </Modal>
    </form>
  )
}