import {Color} from "../../constants/Colors";

import styled from "styled-components";

export const ModalInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${Color.white};
  text-align: center;
  font-size: 20px;
  font-weight: 400;

  @media only screen and (max-width: 800px) {
    width: 70%;
  }
`;

export const ModalButton = styled.button`
  background-color: ${Color.purple};
  width: 70px;
  height: 40px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  color: ${Color.white};
  font-weight: 800;
  line-height: 90%;

  @media only screen and (max-width: 800px) {
    width: 20%;
    margin-top: 20px;
  }
`;