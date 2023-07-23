import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  
  @media (max-width: 768px) {
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
  }
`;
