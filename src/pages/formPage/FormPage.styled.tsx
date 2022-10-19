import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const FormPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 0px 40px;
  position: relative;
`;

export const CardList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px 20px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const ModalWindow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 120px;
  background: ${Colors.WHITE};
  border-radius: 10px;
  p {
    color: ${Colors.MIDDLE_BLACK};
    font-size: 20px;
  }
  &.active {
    display: flex;
  }
`;
