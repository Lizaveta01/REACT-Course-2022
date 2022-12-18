import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const FormWrapper = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 3px solid ${Colors.GRAY};
  border-radius: 10px;
  padding: 20px 40px;
`;

export const ErrorText = styled.div`
  font-size: 16px;
  color: #fa3333;
  margin-top: -10px;
`;
