import Modal from 'react-modal';
import { Button } from '../button';
import { Title } from '../title';
import { Container, ContentActions, ContentButton } from "./styles";

interface ModalDelteProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


Modal.setAppElement('#root')

export function ModalDelete({ isOpen, onRequestClose }: ModalDelteProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-delete-overlay"
      className="react-modal-delete-content"
    >
      <Container>
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