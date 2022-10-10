import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const SelectWrapper = styled.select`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 30px;
  font-size: 16px;
  color: ${Colors.WHITE};
  background-color: ${Colors.GRAY};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;
export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  input {
    width: 300px;
    height: 30px;
    font-size: 16px;
    color: ${Colors.WHITE};
    background-color: ${Colors.GRAY};
    border-radius: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
export const LabelDate = styled(LabelName)``;
export const LabelPlanet = styled(LabelName)``;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  label {
    display: flex;
    gap: 8px;
    font-size: 16px;
  }
`;
export const LabelUploadFile = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  width: 140px;
  height: 40px;
  color: ${Colors.WHITE};
  background-color: ${Colors.BLACK};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;
