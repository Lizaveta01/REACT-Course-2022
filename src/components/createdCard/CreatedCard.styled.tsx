import styled from 'styled-components';

import { Colors } from '../../styles/constansts';
export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.WHITE};
  width: 360px;
  height: 220px;
  color: ${Colors.BLACK};
  border-radius: 8px;
  img {
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
