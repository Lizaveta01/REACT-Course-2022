import styled from 'styled-components';

import { Colors } from '../../styles/constansts';
import IconHeart from '../../assets/Heart.svg';

export const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InfoMessage = styled.div`
  font-size: 24px;
  margin-top: 100px;
`;
export const CharListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }
`;
export const CharItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${Colors.WHITE};
  color: ${Colors.BLACK};
  width: 300px;
  height: 460px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    box-shadow: 9px 10px 14px 1px ${Colors.CARD_HOVER_GREEN};
  }
`;
export const ButtonAddFavorite = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${Colors.WHITE};
  background-image: url(${IconHeart});
  background-repeat: no-repeat;
  background-position: center;
`;
export const ItemImageDiv = styled.div`
  img {
    border-radius: 12px 12px 0px 0px;
    object-fit: contain;
  }
`;
export const ItemInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
export const AboutChar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const AboutCharAddit = styled.div`
  display: flex;
  gap: 30px;
`;
export const ItemName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
export const ItemStatus = styled.p`
  &.dead {
    color: #cc0202;
  }
  &.active {
    color: ${Colors.GREEN};
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const IconDiv = styled.div`
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  margin-bottom: 10px;
`;
