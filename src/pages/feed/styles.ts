import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
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
  justify-content: left;
  padding-left: 2.313rem;
  margin-bottom: 1.5rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 752px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 752px;
`;

