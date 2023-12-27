import styled from "styled-components";
import {Color} from "../../constants/Colors";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 800px;
  border-radius: 10px;
  border: 1px solid black;
  gap: 30px;
  min-height: 600px;
  background: ${Color.darkBlue};
  padding-bottom: 50px;

  @media only screen and (max-width: 800px) {
    width: 90%;
    padding: 20px;
    height: 70%;
    display: flex;
  }
`;

export const Title = styled.h1`
  color: ${Color.purple};
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  line-height: 90%;

  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${Color.purple};
  width: 60px;
  height: 40px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  line-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const DeleteConfirm = styled.div`
  height: 20%;
  width: 20%;
  background-color: ${Color.darkBlue};
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  
`;

export const ConfirmText = styled.span`
  padding-left: 10px;
  color: ${Color.white};
  font-weight: 400;
  font-size: 20px;
`;

export const ButtonsConfirm = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonConfirm = styled.button`
  background-color: ${Color.purple};
  width: 60px;
  height: 40px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${Color.white};
  font-weight: 800;
  line-height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteConfirmBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Plus = styled.img`
  display: flex;
  height: 20px;
  width: 20px;
`;

export const Cross = styled.img`
  display: flex;
  height: 20px;
  width: 20px;
`;

export const Check = styled.img`
  display: flex;
  height: 20px;
  width: 20px;
`
