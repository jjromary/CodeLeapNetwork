import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  display: flex;
  padding-bottom: 1.5rem;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
  gap: 1.5rem;
  overflow: auto;
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

export const ContentCreatePost = styled.div`
  width: 100%;
  max-width: 704px;
  max-height: 286px;
  display: flex;
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* margin-top: 1.5rem; */
  /* justify-content: center; */
  /* gap: 1.5rem; */
`;

export const ContentPostList = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

