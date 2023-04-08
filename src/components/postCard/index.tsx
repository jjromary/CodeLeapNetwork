import { useState } from 'react';
import deleteIcon from '../../assets/deleteIcon.svg';
import editIcon from '../../assets/editIcon.svg';
import { ModalDelete } from '../modalDelete';
import { Title } from "../title";
import { Container, ContentDetails, ContentIcons, ContentPost, ContentTitle } from "./styles";


export function PostCard() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true)
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false)
  }

  return (
    <Container>
      <ContentTitle>
        <Title
          title="My First Post at CodeLeap Network!"
        />
        <ContentIcons>
          <button tabIndex={0} type='button' onClick={handleOpenDeleteModal}>
            <img src={deleteIcon} alt="Icon Delete" />
          </button>
          <button tabIndex={0} type='button'>
            <img src={editIcon} alt="Icon Edit" />
          </button>
          <ModalDelete
            isOpen={isDeleteModalOpen}
            onRequestClose={handleCloseDeleteModal}
          />
        </ContentIcons>
      </ContentTitle>

      <ContentDetails>
        <span className='author'>
          @JoseRomary
        </span>
        <span>
          25 minutes ago
        </span>
      </ContentDetails>

      <ContentPost>
        Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
      </ContentPost>

    </Container>
  )
}