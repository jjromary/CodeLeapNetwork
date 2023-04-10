import styled from "styled-components";

interface InputProps {
  height: string;
}

interface InputTextAreaProps {
  placeholder: string;
  heightTextArea: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  display: flex;
  padding-bottom: 1.5rem;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
  gap: 1.5rem;
  overflow: auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme["blue-500"]};
  font-style: normal;
  font-weight: 700;
  font-size: 1.375rem;
  color: ${(props) => props.theme["white"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.313rem;
  margin-bottom: 1.5rem;
`;

export const ContentCreatePost = styled.div`
  width: 100%;
  /* max-width: 704px; */
  max-height: 286px;
  display: flex;
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentPostList = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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
  margin-top: 1.5rem;
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

export const Warning = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErroMessage = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme["red-500"]};
`;

export const ButtonBackToTop = styled.a`
  width: 120px;
  height: 32px;
  position: fixed;
  bottom: 20px;
  left: 10px;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["black"]};
  text-decoration: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  :hover {
    transition: 0.2s;
    opacity: 80%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue-500"]};
  }
`;

