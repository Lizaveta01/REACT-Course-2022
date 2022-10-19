import styled from 'styled-components';

import { Colors } from '../../../styles/constansts';
export const FormWrapper = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 3px solid ${Colors.GRAY};
  border-radius: 10px;
  padding: 20px 40px;
`;
export const SelectWrapper = styled.select``;
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
export const LabelDate = styled(LabelName)``;
export const LabelNews = styled.label`
  display: flex;
  flex-direction: row;
  gap: 20px;
  input {
    width: 20px;
    height: 20px;
  }
`;
export const LabelPlanet = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  select {
    display: flex;
    flex-direction: column;
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
export const ErrorText = styled.div`
  font-size: 16px;
  color: red;
  margin-top: -10px;
`;
