import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { api } from '../../lib/axios';
import { Button } from '../button';
import { Title } from '../title';
import { Container, ContentActions, ContentButton } from "./styles";

interface ModalDelteProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idPostCard: number;
  username: string;
}

Modal.setAppElement('#root')

export function ModalDelete({ isOpen, onRequestClose, idPostCard, username }: ModalDelteProps) {
  const loadUserName = localStorage.getItem('user')

  const { handleSubmit } = useForm({

  })

  const handleDeletePost = (data: any) => {
    if (loadUserName !== username) {
      console.log("user diferent of author")
      return false
    }
    deletePost()
    console.log(data)
  }

  const deletePost = async () => {
    await api.delete(`/${idPostCard}/`)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-delete-overlay"
      className="react-modal-delete-content"
    >
      <Container onSubmit={handleSubmit(handleDeletePost)}>
        <Title
          title='Are you sure you want to delete this item?'
        />
        <ContentButton>
          <ContentActions>
            <Button
              width='120px'
              height='32px'
              nameButton='Cancel'
              type="button"
              onClick={onRequestClose}
              actionButton="cancel"
            />
            <Button
              width='120px'
              height='32px'
              nameButton='Delete'
              actionButton='delete'
              type='submit'
            />
          </ContentActions>
        </ContentButton>
      </Container>
    </Modal>
  )
}