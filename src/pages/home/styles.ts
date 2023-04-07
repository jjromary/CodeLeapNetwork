import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 90vh;
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

