import styled from 'styled-components';

import { Colors } from '../../../styles/constansts';

export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  input {
    width: 300px;
    height: 36px;
    font-size: 16px;
    color: ${Colors.WHITE};
    background-color: ${Colors.GRAY};
    border-radius: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
