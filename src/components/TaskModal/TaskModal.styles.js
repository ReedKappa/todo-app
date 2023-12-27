import styled from 'styled-components';
import { Color } from "../../constants/Colors";

export const Backdrop = styled.div`
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

export const ModalWrapper = styled.div`
  width: 450px;
  height: 350px;
  background: ${Color.darkBlue};
  border: 1px solid ${Color.white};
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 90%;
    height: 50%;
    gap: 30px;
  }
`;

