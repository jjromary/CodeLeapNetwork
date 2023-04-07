import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 205px;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 16px;
  padding: 1.5rem 0 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  input {
    margin-top: 1.5rem;
    width: 452px;
    height: 32px;
    border-radius: 8px;

    border: 1px solid ${(props) => props.theme["gray-700"]};

    ::placeholder {
      padding-left: 0.7rem;
      font-size: 0.875rem;
    }
  }
`;

