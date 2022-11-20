import React from 'react';

import { IChar } from '../../constants/constants';
import { ButtonClose, Container, Info, ModalWrapper, ImgContainer } from './ModalWindow.styled';

type Props = {
  card: IChar;
  closeWindow: () => void;
};

const ModalWindow = ({ closeWindow, card }: Props) => {
  const data = [
    {
      id: 111,
      title: 'Name',
      info: card.name,
    },
    {
      id: 112,
      title: 'Status',
      info: card.status,
    },
    {
      id: 113,
      title: 'Spesies',
      info: card.species,
    },
    {
      id: 114,
      title: 'Gender',
      info: card.gender,
    },
    {
      id: 115,
      title: 'Planet',
      info: card.origin.name,
    },
  ];

  return (
    <ModalWrapper data-testid="modal-window">
      <Container>
        <ButtonClose onClick={() => closeWindow()} data-testid="button-modal-window" />
        <ImgContainer style={{ backgroundImage: `url(${card.image})` }} data-testid="modal-image" />
        <Info>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  {item.title}: <span> {item.info}</span>
                </p>
              </div>
            );
          })}
        </Info>
      </Container>
    </ModalWrapper>
  );
};

export default ModalWindow;
