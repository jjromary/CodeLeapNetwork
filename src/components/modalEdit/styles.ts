import styled from "styled-components";

interface InputProps {
  height: string;
}

interface InputTextAreaProps {
  placeholder: string;
  heightTextArea: string;
}

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
`;

export const ContainerFildsForm = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  max-height: 240px;

  label {
    font-size: 0.875rem;

    @media (min-width: 425px) {
      font-size: 1rem;
    }
  }
`;

export const ContainerLabel = styled.label`
  font-size: 0.875rem;
  @media (min-width: 425px) {
    font-size: 1rem;
  }
`;

export const ContainerInput = styled.input<InputProps>`
  width: 100%;
  height: ${(props) => props.height};
  border-radius: 8px;
  margin: 0.5rem 0 1.5rem 0;
  padding-left: 0.7rem;
  border: 1px solid ${(props) => props.theme["gray-700"]};

  ::placeholder {
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-300"]};

    @media (min-width: 425px) {
      font-size: 0.875rem;
    }
  }
`;

export const ContainerTextArea = styled.textarea<InputTextAreaProps>`
  width: 100%;
  height: ${(props) => props.heightTextArea};
  border-radius: 8px;
  margin-top: 0.5rem;
  padding: 0.5rem 0 0 0.7rem;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  resize: none;

  ::placeholder {
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-300"]};

    @media (min-width: 425px) {
      font-size: 0.875rem;
    }
  }
`;

export const ContentButton = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export const ContentActions = styled.div`
  width: 256px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ErroMessage = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme["red-500"]};
`;

