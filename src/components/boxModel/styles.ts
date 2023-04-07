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
`;

