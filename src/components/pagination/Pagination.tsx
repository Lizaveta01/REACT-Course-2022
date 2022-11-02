import React from 'react';

import { Pagination, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useMyContext } from '../../context/Context';
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
    cardsNumber,
    page,
    cards,
    setPage,
    currentPage,
    setCurrentPage,
    lastContentIndex,
    firstContentIndex,
    setLastIndex,
    setFirstIndex,
  } = useMyContext();

  const pageCount = Math.ceil(cardsNumber / countCardInPage);
  // const [selectPage, setSelectPage] = useState(1);

  const classes = useStyles();
  const handleChange = (num: number) => {
    checkDirection(num);
  };

  function checkDirection(num: number) {
    if (num === currentPage + 1) {
      nextPage(num);
    } else if (num === currentPage - 1) {
      prevPage(num);
    } else {
      checkPage(num);
    }
  }
  function nextPage(num: number) {
    const isUbdateResponse = checkCountCardsNextPage();
    if (isUbdateResponse) {
      setPage(page + 1);
    }
    setIntervalNext();
    setCurrentPage(num);
  }

  function prevPage(num: number) {
    const isUbdateResponse = checkCountCardsPrevPage();
    if (isUbdateResponse) {
      setPage(page - 1);
    }
    setIntervalPrev();
    setCurrentPage(num);
  }

  function checkPage(num: number) {
    setCurrentPage(num);
    if (countCardInPage === 20) {
      setPage(num);
    }
    if (countCardInPage === 10) {
      num % 2 === 0
        ? (setPage(num / 2), setFirstIndex(10), setLastIndex(20))
        : (setPage(Math.ceil(num / 2)), setFirstIndex(0), setLastIndex(10));
    }
    if (countCardInPage === 4) {
      num % 5 === 0
        ? (setPage(num / 5), setFirstIndex(16), setLastIndex(20))
        : num % 5 === 1
        ? (setPage(Math.ceil(num / 5)), setFirstIndex(0), setLastIndex(4))
        : num % 5 === 2
        ? (setPage(Math.ceil(num / 5)), setFirstIndex(4), setLastIndex(8))
        : num % 5 === 3
        ? (setPage(Math.ceil(num / 5)), setFirstIndex(8), setLastIndex(12))
        : (setPage(Math.ceil(num / 5)), setFirstIndex(12), setLastIndex(16));
    }
  }

  function checkCountCardsNextPage() {
    if (
      countCardInPage === 20 ||
      (countCardInPage === 4 && currentPage % 5 === 0) ||
      (countCardInPage === 10 && currentPage % 2 === 0)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkCountCardsPrevPage() {
    if (
      countCardInPage === 20 ||
      (countCardInPage === 4 && currentPage % 5 === 1) ||
      (countCardInPage === 10 && currentPage % 2 === 1)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function setIntervalNext() {
    if (lastContentIndex === 20) {
      setFirstIndex(0);
      setLastIndex(countCardInPage);
    } else {
      setFirstIndex(firstContentIndex + countCardInPage);
      setLastIndex(lastContentIndex + countCardInPage);
    }
  }

  function setIntervalPrev() {
    if (lastContentIndex === countCardInPage) {
      setFirstIndex(20 - countCardInPage);
      setLastIndex(20);
    } else {
      setFirstIndex(firstContentIndex - countCardInPage);
      setLastIndex(lastContentIndex - countCardInPage);
    }
  }

  return (
    <Container>
      <Typography>Page: {currentPage}</Typography>
      {!!cards.length && (
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
