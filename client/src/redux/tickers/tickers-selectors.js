export const getTickersList = (state) => Object.keys(state.tickers);

export const getTickerPrice = (state, ticker) => state.tickers[ticker].price;

export const getTickerChange = (state, ticker) => state.tickers[ticker].change;

export const getTickerChangePercent = (state, ticker) =>
  state.tickers[ticker].change_percent;

export const getTickerDividend = (state, ticker) =>
  state.tickers[ticker].dividend;

export const getTickerYield = (state, ticker) => state.tickers[ticker].yield;

export const getTickerLastTradeTime = (state, ticker) =>
  state.tickers[ticker].last_trade_time;

export const getTickerName = (state, ticker) => state.tickers[ticker].name;

export const getIsIncrease = (state, ticker) =>
  state.tickers[ticker].isIncrease;
