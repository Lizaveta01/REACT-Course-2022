import styled from 'styled-components';
import { Colors } from '../../../styles/constansts';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  margin: 10px 0px;
`;

export const Switcher = styled.label`
  position: relative;
  display: block;
  width: 60px;
  height: 34px;
`;

export const SwitcherTrack = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.GRAY};
  transition: 0.3s;
  border-radius: 4px;
  &::before {
    position: absolute;
    content: 'Y';
    color: ${Colors.WHITE};
    left: 5px;
    top: 8px;
    font-size: 18px;
  }
  &::after {
    position: absolute;
    content: 'N';
    color: ${Colors.WHITE};
    right: 10px;
    top: 8px;
    font-size: 18px;
  }
`;
export const SwitcherSlider = styled.div`
  position: absolute;
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: ${Colors.WHITE};
  transition: 0.3s;
  z-index: 1;
  border-radius: 4px;
`;
export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitcherTrack} {
    background-color: ${Colors.GREEN};
  }
  &:checked + ${SwitcherTrack} ${SwitcherSlider} {
    transform: translateX(26px);
  }

  &:focus + ${SwitcherTrack} {
    box-shadow: 3px 3px 3px ${Colors.WHITE};
  }
`;
