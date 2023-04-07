import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid ${(props) => props.theme["gray-300"]};
  border-radius: 16px 16px 0 0; */
`;

export const ContentTitle = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme["blue-500"]};
  color: ${(props) => props.theme["white"]};
  padding: 1.5rem;
  border-radius: 16px 16px 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentIcons = styled.div`
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    all: unset;
    cursor: pointer;
  }
`;

export const ContentDetails = styled.div`
  width: 100%;
  max-width: 704px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 0 1.5rem;

  font-size: 14px;
  color: ${(props) => props.theme["gray-700"]};

  @media (min-width: 375px) {
    font-size: 18px;
  }

  .author {
    font-weight: 700;
  }
`;

export const ContentPost = styled.div`
  width: 100%;
  height: 164px;
  max-width: 704px;
  margin-top: 1rem;
  padding: 0 1.5rem;

  text-align: left;
  overflow: auto;
`;

