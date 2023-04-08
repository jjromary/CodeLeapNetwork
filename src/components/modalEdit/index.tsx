import Modal from 'react-modal';
import { Button } from '../button';
import { FieldForm } from '../fieldForm';
import { Title } from '../title';
import { Container, ContentActions, ContentButton } from './styles';

interface ModalEditProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function ModalEdit({ isOpen, onRequestClose }: ModalEditProps) {
  return (
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
        <FieldForm
          type="input"
          placeholder="Title"
          label="Title"
          height="32px"
        />

        <FieldForm
          type="text-area"
          placeholder="Content"
          label="Content  "
          height="74px"
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
      </Container>

    </Modal>
  )
}