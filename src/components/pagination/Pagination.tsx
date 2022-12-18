import React, { useEffect, useState } from 'react';

import { Pagination, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Container } from './Pagination.style';
import { Colors } from '../../styles/constansts';
import { Cards, Interval } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCardInterval, setCurrentPage, setPage } from '../../store/slices/filterSlice';

type ItervalType = {
  [key: string]: {
    [key: string]: number;
  };
};
const IntervalForFour: ItervalType = {
  period_0: {
    start: 16,
    end: 20,
  },
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
  const dispatch = useAppDispatch();
  const { cards, currentPage, page, countCardInPage, intervalStart, intervalEnd, cardsNumber } =
    useAppSelector((state) => {
      return {
        countCardInPage: state.filter.countCardInPage,
        cardsNumber: state.fetch_data.cardsNumber,
        page: state.filter.page,
        currentPage: state.filter.currentPage,
        cards: state.fetch_data.cards,
        intervalStart: state.filter.interval.start,
        intervalEnd: state.filter.interval.end,
      };
    });

  const pageCount = Math.ceil(cardsNumber / countCardInPage);
  const [pageNumber, setPageNumber] = useState(Cards.DEFAULT_PAGE_1);

  useEffect(() => {
    checkDirection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      dispatch(setPage(page + 1));
    }
    setIntervalNext();
    dispatch(setCurrentPage(pageNumber));
  }

  function prevPage() {
    const isUbdateResponse = checkCountCardsPrevPage();
    if (isUbdateResponse) {
      dispatch(setPage(page - 1));
    }
    setIntervalPrev();
    dispatch(setCurrentPage(pageNumber));
  }

  function checkPage() {
    dispatch(setCurrentPage(pageNumber));
    if (countCardInPage === Cards.DEFAUL_COUNT_REQUEST) {
      dispatch(setPage(pageNumber));
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
    dispatch(setPage(Math.ceil(pageNumber / Cards.DIVIDE_NUM_2)));
    pageNumber % Cards.DIVIDE_NUM_2 === 0
      ? dispatch(setCardInterval({ start: period_2.start, end: period_2.end }))
      : dispatch(setCardInterval({ start: period_1.start, end: period_1.end }));
  }

  function SetInervalToFour() {
    const period = `period_${pageNumber % Cards.DIVIDE_NUM_5}`;
    dispatch(
      setCardInterval({ start: IntervalForFour[period].start, end: IntervalForFour[period].end }),
    );
    dispatch(setPage(Math.ceil(pageNumber / Cards.DIVIDE_NUM_5)));
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
    if (intervalEnd === Cards.DEFAUL_COUNT_REQUEST) {
      dispatch(setCardInterval({ start: Interval.DEFAULT, end: countCardInPage }));
    } else {
      dispatch(
        setCardInterval({
          start: intervalStart + countCardInPage,
          end: intervalEnd + countCardInPage,
        }),
      );
    }
  }

  function setIntervalPrev() {
    if (intervalEnd === countCardInPage) {
      dispatch(
        setCardInterval({
          start: Cards.DEFAUL_COUNT_REQUEST - countCardInPage,
          end: Cards.DEFAUL_COUNT_REQUEST,
        }),
      );
    } else {
      dispatch(
        setCardInterval({
          start: intervalStart - countCardInPage,
          end: intervalEnd - countCardInPage,
        }),
      );
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
