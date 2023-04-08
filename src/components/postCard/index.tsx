import moment from 'moment';
import { useState } from 'react';
import deleteIcon from '../../assets/deleteIcon.svg';
import editIcon from '../../assets/editIcon.svg';
import { BoxModel } from '../boxModel';
import { ModalDelete } from '../modalDelete';
import { ModalEdit } from '../modalEdit';
import { Title } from "../title";
import { Container, ContentDetails, ContentIcons, ContentPost, ContentTitle } from "./styles";

interface PostCardProps {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export function PostCard({ id, username, created_datetime, title, content }: PostCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const datePost = moment(created_datetime).fromNow()

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true)
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false)
  }

  function handleOpenEditModal() {
    setIsEditModalOpen(true)
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false)
  }

  return (
    <BoxModel
      width="94%"
      height="316px"
    >

      <Container>
        <ContentTitle>
          <Title
            title={title}
          />
          <ContentIcons>
            <button tabIndex={0} type='button' onClick={handleOpenDeleteModal}>
              <img src={deleteIcon} alt="Icon Delete" />
            </button>
            <button tabIndex={0} type='button' onClick={handleOpenEditModal}>
              <img src={editIcon} alt="Icon Edit" />
            </button>
            <ModalDelete
              isOpen={isDeleteModalOpen}
              onRequestClose={handleCloseDeleteModal}
            />
            <ModalEdit
              isOpen={isEditModalOpen}
              onRequestClose={handleCloseEditModal}
            />
          </ContentIcons>
        </ContentTitle>

        <ContentDetails>
          <span className='author'>
            @{username}
          </span>
          <span>
            {datePost}
          </span>
        </ContentDetails>

        <ContentPost>
          {content}
        </ContentPost>

      </Container>
    </BoxModel>

  )
}