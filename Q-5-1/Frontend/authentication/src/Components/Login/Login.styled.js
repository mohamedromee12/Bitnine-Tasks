import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 500px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0000004a;
  padding: 50px;
  z-index: 1000;
  border-radius: 20px;
  max-width: 65%;

  /* Add the blur effect for supported browsers */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* Safari */
  -moz-backdrop-filter: blur(5px); /* Firefox */
  -o-backdrop-filter: blur(5px); /* Opera */

  @media (max-width: 768px) {
  }
`;

export const Header = styled.h3`
  width: 100%;
  font-size: 32px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
  }
`;

export const MyInput = styled.input`
  width: 100%;
  height: 40px;
  color: white !important;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: white;

  margin: 20px 0;

  @media (max-width: 768px) {
  }
`;

export const MyButton = styled.button`
  width: 100%;
  color: black;
  opacity: ${(p) => (p.disabled ? "0.5" : "1")};
  background-color: white;
  border: 1px solid transparent;
  border-radius: 50px;
  margin: 50px 0 0 10px;

  @media (max-width: 768px) {
  }
`;

export const Change = styled.div`
  width: 100%;
  color: white;
  background-color: transparent;
  margin: 50px 0 0 10px;

  span {
    cursor: pointer;
    transition: color  0.3s ease; /* Define the transition property and duration */

    &:hover {
        color: #60c4dc;
    }
  }

  @media (max-width: 768px) {
  }
`;
