import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
export const SelectWrapper = styled.select`
  display: flex;
  flex-direction: column;
  option {
  }
`;
export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  input {
  }
`;
export const LabelDate = styled(LabelName)`
`;
export const Switcher = styled.div`
  display: flex;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
`;
