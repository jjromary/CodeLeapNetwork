import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 59px;
  margin-top: 1.5rem;

  label {
    font-size: 0.875rem;

    @media (min-width: 425px) {
      font-size: 1rem;
    }
  }

  input {
    width: 100%;
    height: 32px;
    border-radius: 8px;
    margin-top: 0.5rem;

    border: 1px solid ${(props) => props.theme["gray-700"]};

    ::placeholder {
      padding-left: 0.7rem;
      font-size: 0.75rem;

      @media (min-width: 425px) {
        font-size: 0.875rem;
      }
    }
  }
`;

