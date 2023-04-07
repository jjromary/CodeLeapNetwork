import styled from "styled-components";

interface InputProps {
  height: string;
}

export const Container = styled.div<InputProps>`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  label {
    font-size: 0.875rem;

    @media (min-width: 425px) {
      font-size: 1rem;
    }
  }

  input {
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
  }

  textarea {
    width: 100%;
    height: ${(props) => props.height};
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
  }
`;

