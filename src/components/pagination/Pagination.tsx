import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Container } from './Pagination.style';
import { Colors } from '../../styles/constansts';

import { Cards, Interval } from '../../constants/constants';
import { setCurrentPage, setPage, setInterval } from '../../store/actions/actions';
import { IReducerState } from '../../store/Reducer';

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
  const dispatch = useDispatch();
  const countCardInPage = useSelector((state: IReducerState) => state.countCardInPage);
  const page = useSelector((state: IReducerState) => state.page);
  const currentPage = useSelector((state: IReducerState) => state.currentPage);
  const cardsNumber = useSelector((state: IReducerState) => state.cardsNumber);
  const cards = useSelector((state: IReducerState) => state.cards);
  const intervalStart = useSelector((state: IReducerState) => state.interval.start);
  const intervalEnd = useSelector((state: IReducerState) => state.interval.end);

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
      ? dispatch(setInterval(period_2))
      : dispatch(setInterval(period_1));
  }

  function SetInervalToFour() {
    const { period_1, period_2, period_3, period_4, period_5 } = IntervalForFour;
    dispatch(setPage(Math.ceil(pageNumber / Cards.DIVIDE_NUM_5)));
    switch (pageNumber % Cards.DIVIDE_NUM_5) {
      case 1:
        dispatch(setInterval(period_1));
        break;
      case 2:
        dispatch(setInterval(period_2));
        break;
      case 3:
        dispatch(setInterval(period_3));
        break;
      case 4:
        dispatch(setInterval(period_4));
        break;
      default:
        dispatch(setInterval(period_5));
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
    const period = {
      start: Interval.DEFAULT,
      end: countCardInPage,
    };
    if (intervalEnd === Cards.DEFAUL_COUNT_REQUEST) {
      dispatch(setInterval(period));
    } else {
      period.start = intervalStart + countCardInPage;
      period.end = intervalEnd + countCardInPage;
      dispatch(setInterval(period));
    }
  }

  function setIntervalPrev() {
    const period = {
      start: Cards.DEFAUL_COUNT_REQUEST - countCardInPage,
      end: Cards.DEFAUL_COUNT_REQUEST,
    };
    if (intervalEnd === countCardInPage) {
      dispatch(setInterval(period));
    } else {
      period.start = intervalStart - countCardInPage;
      period.end = intervalEnd - countCardInPage;
      dispatch(setInterval(period));
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
