import styled from 'styled-components';
import { Colors } from '../../styles/constansts';
import IconSearch from '../../assets/Search.svg';
export const FormWrapper = styled.form`
  width: auto;
  position: relative;
  margin-top: 20px;
`;
export const InputSearch = styled.input`
  width: 300px;
  height: 38px;
  color: ${Colors.WHITE};
  background-color: #ffffff6e;
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;
export const ButtonSearch = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${IconSearch});
  background-color: transparent;
  border: none;
  position: absolute;
  top: 4px;
  right: 7px;
`;
