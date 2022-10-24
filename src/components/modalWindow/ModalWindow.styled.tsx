import styled from 'styled-components';

import { Colors } from '../../styles/constansts';
import Icon from '../../assets/Close.svg';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: ${Colors.MIDDLE_BLACK};
  z-index: 100;
`;
export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 8px;
  background-color: ${Colors.WHITE};
  width: 600px;
  height: 400px;
  margin-top: 100px;
  position: relative;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${Colors.BLACK};
  p {
    font-size: 24px;
    font-weight: 600;
    span {
      font-size: 24px;
      font-weight: 400;
    }
  }
`;
export const ImgContainer = styled.div`
  width: 280px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 10px solid ${Colors.GREEN};
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Icon});
  background-color: inherit;
`;
