import styled from 'styled-components';
import { Color } from "../../constants/Colors";

export const ItemTask = styled.li`
  width: 550px;
  height: 40px;
  border: 1px solid ${Color.white};
  border-radius: 10px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Color.purple};
  margin-bottom: 10px;

  @media (max-width: 900px) {
    width: 100%;
    margin: 10px auto;
  }
`;

export const TextTask = styled.span`
  padding-left: 10px;
  color: ${Color.white};
  font-weight: 600;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const ButtonsTask = styled.div`
  display: flex;
`;

export const ButtonTask = styled.button`
  border: none;
  background: none;
  display: flex;
`;

export const IconDelete = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;

  @media only screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`;

export const IconEdit = styled.img`
  cursor: pointer;
  width: 22px;
  height: 22px;

  @media only screen and (max-width: 800px) {
    width: 18px;
    height: 18px;
  }
`;
