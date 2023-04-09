import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { Button } from '../button';
import { Title } from '../title';
import { Container, ContainerFildsForm, ContainerInput, ContainerLabel, ContainerTextArea, ContentActions, ContentButton } from './styles';

interface ModalEditProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function ModalEdit({ isOpen, onRequestClose }: ModalEditProps) {

  const { register, handleSubmit } = useForm()

  function handleEditPost(data: any) {
    console.log(data)
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