import React, { useEffect, useState } from 'react';

import { Pagination, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useMyContext } from '../../context/Context';
import { Container } from './Pagination.style';
import { Colors } from '../../styles/constansts';
import { Cards, Interval } from '../../constants/constants';

const IntervalForFour = {
  period_1: {
    start: 0,
    end: 4,
  },
  period_2: {
    start: 4,
    end: 8,
  },

  period_3: {
    start: 8,
    end: 12,
  },
  period_4: {
    start: 12,
    end: 16,
  },
  period_5: {
    start: 16,
    end: 20,
  },
};

const IntervalForTen = {
  period_1: {
    start: 0,
    end: 10,
  },
  period_2: {
    start: 10,
    end: 20,
  },
};

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: Colors.WHITE,
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
  const [pageNumber, setPageNumber] = useState(Cards.DEFAULT_PAGE_1);

  useEffect(() => {
    checkDirection();
  }, [pageNumber]);

  const classes = useStyles();
  const handleChange = (num: number) => {
    setPageNumber(num);
  };

  function checkDirection() {
    if (pageNumber === currentPage + 1) {
      nextPage();
    } else if (pageNumber === currentPage - 1) {
      prevPage();
    } else {
      checkPage();
    }
  }
  function nextPage() {
    const isUbdateResponse = checkCountCardsNextPage();
    if (isUbdateResponse) {
      setPage(page + 1);
    }
    setIntervalNext();
    setCurrentPage(pageNumber);
  }

  function prevPage() {
    const isUbdateResponse = checkCountCardsPrevPage();
    if (isUbdateResponse) {
      setPage(page - 1);
    }
    setIntervalPrev();
    setCurrentPage(pageNumber);
  }

  function checkPage() {
    setCurrentPage(pageNumber);
    if (countCardInPage === Cards.DEFAUL_COUNT_REQUEST) {
      setPage(pageNumber);
    }
    if (countCardInPage === Cards.COUNT_10) {
      SetInervalToTen();
    }
    if (countCardInPage === Cards.COUNT_4) {
      SetInervalToFour();
    }
  }

  function SetInervalToTen() {
    const { period_1, period_2 } = IntervalForTen;
    setPage(Math.ceil(pageNumber / Cards.DIVIDE_NUM_2));
    pageNumber % Cards.DIVIDE_NUM_2 === 0
      ? (setFirstIndex(period_2.start), setLastIndex(period_2.end))
      : (setFirstIndex(period_1.start), setLastIndex(period_1.end));
  }

  function SetInervalToFour() {
    const { period_1, period_2, period_3, period_4, period_5 } = IntervalForFour;
    setPage(Math.ceil(pageNumber / Cards.DIVIDE_NUM_5));
    switch (pageNumber % Cards.DIVIDE_NUM_5) {
      case 1:
        setFirstIndex(period_1.start), setLastIndex(period_1.end);
        break;
      case 2:
        setFirstIndex(period_2.start), setLastIndex(period_2.end);
        break;
      case 3:
        setFirstIndex(period_3.start), setLastIndex(period_3.end);
        break;
      case 4:
        setFirstIndex(period_4.start), setLastIndex(period_4.end);
        break;
      default:
        setFirstIndex(period_5.start), setLastIndex(period_5.end);
        break;
    }
  }

  function checkCountCardsNextPage() {
    if (
      countCardInPage === Cards.COUNT_20 ||
      (countCardInPage === Cards.COUNT_4 && currentPage % Cards.DIVIDE_NUM_5 === 0) ||
      (countCardInPage === Cards.COUNT_10 && currentPage % Cards.DIVIDE_NUM_2 === 0)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkCountCardsPrevPage() {
    if (
      countCardInPage === Cards.COUNT_20 ||
      (countCardInPage === Cards.COUNT_4 && currentPage % Cards.DIVIDE_NUM_5 === 1) ||
      (countCardInPage === Cards.COUNT_10 && currentPage % Cards.DIVIDE_NUM_2 === 1)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function setIntervalNext() {
    if (lastContentIndex === Cards.DEFAUL_COUNT_REQUEST) {
      setFirstIndex(Interval.DEFAULT);
      setLastIndex(countCardInPage);
    } else {
      setFirstIndex(firstContentIndex + countCardInPage);
      setLastIndex(lastContentIndex + countCardInPage);
    }
  }

  function setIntervalPrev() {
    if (lastContentIndex === countCardInPage) {
      setFirstIndex(Cards.DEFAUL_COUNT_REQUEST - countCardInPage);
      setLastIndex(Cards.DEFAUL_COUNT_REQUEST);
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
