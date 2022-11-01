import React, { useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { useMyContext } from '../../context/Context';
import { Pagination, Typography } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { makeStyles } from '@mui/styles';
import { Container } from './Pagination.style';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
}));

const PaginationComponent = () => {
  const {
    countCardInPage,
    setCountCards,
    cardsNumber,
    setCardsNumber,
    page,
    setPage,
    currentPage,
    setCurrentPage,
    lastContentIndex,
    firstContentIndex,
    setLastIndex,
    setFirstIndex,
  } = useMyContext();

  const pageCount = Math.ceil(cardsNumber / countCardInPage);

  // setLastIndex(currentPage * countCardInPage);
  // setFirstIndex(lastContentIndex - countCardInPage);

  const classes = useStyles();
  const handleChange = (num: number) => {
    const isUbdateResponse = checkCountCardsInPage();
    console.log(isUbdateResponse);
    if (isUbdateResponse) {
      setPage(page + 1);
    }
    setCurrentPage(num);
    setInterval();
  };

  function checkCountCardsInPage() {
    if (
      countCardInPage === 20 ||
      (countCardInPage === 4 && currentPage % 5 === 0) ||
      (countCardInPage === 10 && currentPage % 10 === 0)
    ) {
      return true;
    } else {
      return false;
    }
  }
//!!!!!----------------------------------
  function setInterval() {
    if (lastContentIndex === countCardInPage) {
      setFirstIndex(20 - countCardInPage);
      setLastIndex(20);
    } else {
      setFirstIndex(firstContentIndex + countCardInPage);
      setLastIndex(lastContentIndex + countCardInPage);
    }
  }

  return (
    <Container>
      <Typography>Page: {currentPage}</Typography>
      {!!cardsNumber && (
        <Pagination
          classes={{ ul: classes.ul }}
          count={pageCount}
          page={currentPage}
          onChange={(_, num) => handleChange(num)}
          color="secondary"
        />
      )}
    </Container>
  );
};

export default PaginationComponent;
