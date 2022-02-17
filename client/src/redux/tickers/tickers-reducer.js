import { createReducer } from "@reduxjs/toolkit";
import { changeTicker, changeIsIncrease } from "./tickers-actions";

const tickers = createReducer(
  {},
  {
    [changeTicker]: (state, { payload }) => ({
      ...state,
      [payload.ticker]: {
        ...state[payload.ticker],
        ...payload,
      },
    }),
    [changeIsIncrease]: (state, { payload: { ticker, isIncrease } }) => ({
      ...state,
      [ticker]: {
        ...state[ticker],
        isIncrease,
      },
    }),
  }
);

export default tickers;
