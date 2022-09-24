import styled from 'styled-components';
import { Colors } from '../../styles/constansts';

export const HeaderWrapper = styled.div`
  background-color: ${Colors.BLACK};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  a {
    color: ${Colors.WHITE};
  }
`;
