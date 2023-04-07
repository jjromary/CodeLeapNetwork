import styled from "styled-components";

export const Container = styled.div`
  width: 452px;
  height: 59px;
  margin-top: 1.5rem;

  input {
    width: 452px;
    height: 32px;
    border-radius: 8px;
    margin-top: 0.5rem;

    border: 1px solid ${(props) => props.theme["gray-700"]};

    ::placeholder {
      padding-left: 0.7rem;
      font-size: 0.875rem;
    }
  }
`;

