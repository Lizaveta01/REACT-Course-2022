import React, { useEffect, useState } from 'react';

import CreatedCard from '../../components/createdCard/CreatedCard';
import Form from '../../components/form/Form';
import { ICreatedCard } from '../../components/form/types';
import { ClassCSS } from '../../constants/constants';
import { useComponentDidMount } from '../../utils/customHooks';
import { CardList, FormPageWrapper, ModalWindow } from './FormPage.styled';

export const FormPage = () => {
  const isComponentMounted = useComponentDidMount();
  const [createdCards, setCreatedCards] = useState<ICreatedCard[]>([]);
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);

  const addCard = (newCard: ICreatedCard) => {
    setCreatedCards([...createdCards, newCard]);
  };

  const closeModalWindow = () => {
    setTimeout(() => {
      setIsOpenModalWindow(false);
    }, 2000);
  };

  useEffect(() => {
    if (isComponentMounted) {
      setIsOpenModalWindow(true);
      closeModalWindow();
    }
  }, [createdCards]);

  return (
    <FormPageWrapper>
      <Form addCard={addCard} />
      <CardList>
        {!!createdCards.length &&
          createdCards.map((item: ICreatedCard, index) => {
            return <CreatedCard card={item} key={index} />;
          })}
      </CardList>
      <ModalWindow className={isOpenModalWindow ? ClassCSS.ACTIVE : ''}>
        <p>Card was created successfully!</p>
      </ModalWindow>
    </FormPageWrapper>
  );
};

export default FormPage;
