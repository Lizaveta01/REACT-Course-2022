import styled from 'styled-components';
import { Colors } from '../../styles/constansts';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  select {
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 30px;
    font-size: 16px;
    color: ${Colors.WHITE};
    background-color: ${Colors.GRAY};
    border-radius: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const Label = styled.label`
  color: ${Colors.WHITE};
  font-size: 18px;
`;
export const Container = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 20px;
`;
