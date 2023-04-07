import styled from "styled-components";

interface StylesBoxModelProps {
  width: string;
  height: string;
}

export const Container = styled.div<StylesBoxModelProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme["white"]};
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme["gray-300"]};
  padding: 1.5rem 0 0 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

