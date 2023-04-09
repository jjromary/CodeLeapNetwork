import styled from "styled-components";

interface InputProps {
  height: string;
}

export const Container = styled.main`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 205px;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme["gray-300"]};
  padding: 1.5rem 1.5rem 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 550px) {
    width: 500px;
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
  margin-top: 0.5rem;
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

