import styled from 'styled-components';
import IconSpeciesImage from '../../assets/Alien.svg';
import IconPlanetImage from '../../assets/Planet.svg';
import IconNewsImage from '../../assets/News.svg';
import IconBirthdayImage from '../../assets/Birthday.svg';

import { Colors } from '../../styles/constansts';
export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.GRAY};
  width: 360px;
  height: 200px;
  color: ${Colors.WHITE};
  border-radius: 8px;
  gap: 40px;
  padding: 20px;
  position: relative;
`;

export const Name = styled.p`
  align-self: center;
  font-size: 22px;
  font-weight: 500;
`;

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  p {
    font-size: 16px;
  }
`;
export const SpeciesIcon = styled.div`
  width: 26px;
  height: 26px;
  background-repeat: no-repeat;
  background-image: url(${IconSpeciesImage});
  background-size: cover;
  &.active {
    background-image: url(${IconSpeciesImage});
  }
`;
export const PlanetIcon = styled(SpeciesIcon)`
  background-image: url(${IconPlanetImage});
`;
export const BirthIcon = styled(SpeciesIcon)`
  background-image: url(${IconBirthdayImage});
`;
export const NewsIcon = styled(SpeciesIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  background-image: none;
  &.active {
    background-image: url(${IconNewsImage});
  }
`;
export const ImgContainer = styled.div`
  width: 130px;
  height: 130px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;
export const Info = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`;
