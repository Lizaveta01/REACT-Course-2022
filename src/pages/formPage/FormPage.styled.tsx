import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const FormPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 0px 100px;
`;
export const FormWrapper = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 3px solid ${Colors.GRAY};
  border-radius: 10px;
  padding: 20px 40px;
`;
export const CardList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;
