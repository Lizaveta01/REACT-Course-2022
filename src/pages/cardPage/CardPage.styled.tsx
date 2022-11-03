import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 100px;
`;

export const AboutCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const PathTitle = styled.div`
  display: flex;
  justify-content: left;
  margin: 40px 0 60px 0;
`;

export const HomeLink = styled.div`
  cursor: pointer;
`;

export const ItemImageDiv = styled.div`
  img {
    border-radius: 12px 12px 12px 12px;
    object-fit: contain;
    width: 300px;
    height: 300px;
    border: 15px solid ${Colors.WHITE};
  }
`;

export const ButtonBack = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  color: ${Colors.BLACK};
  background-color: ${Colors.GREEN};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 140px;
  transition: 0.3s all;
  &:hover {
    background-color: ${Colors.WHITE};
  }
`;
