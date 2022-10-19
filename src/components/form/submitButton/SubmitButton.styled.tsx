import styled from 'styled-components';

import { Colors } from '../../../styles/constansts';

export const ButtonSubmit = styled.button`
  cursor: pointer;
  width: 140px;
  height: 40px;
  color: ${Colors.BLACK};
  background-color: ${Colors.GREEN};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 20px;
  &:hover {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }
  &:disabled {
    background-color: ${Colors.GRAY};
  }
`;
