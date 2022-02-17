import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { tickersSelectors, tickersActions } from "../../redux/tickers";
import style from "./PriceTicker.module.css";

import ChangePercent from "../ChangePercent";
import Button from "../Button";

export default function PriceTicker({ tickerCode, onButtonClick }) {
  const [currentPrice, setCurrentPrice] = useState(null);

  const dispatch = useDispatch();

  const tickerName = useSelector((state) =>
    tickersSelectors.getTickerName(state, tickerCode)
  );
  const tickerPrice = useSelector((state) =>
    tickersSelectors.getTickerPrice(state, tickerCode)
  );
  const tickerChange = useSelector((state) =>
    tickersSelectors.getTickerChange(state, tickerCode)
  );
  const isIncrease = useSelector((state) =>
    tickersSelectors.getIsIncrease(state, tickerCode)
  );

  useEffect(() => {
    if (currentPrice === null) {
      setCurrentPrice(tickerPrice);
      return;
    }
    currentPrice > tickerPrice
      ? dispatch(
          tickersActions.changeIsIncrease({
            ticker: tickerCode,
            isIncrease: false,
          })
        )
      : dispatch(
          tickersActions.changeIsIncrease({
            ticker: tickerCode,
            isIncrease: true,
          })
        );
    setCurrentPrice(tickerPrice);
  }, [tickerPrice]);

  return (
    <div
      className={`${style.PriceTicker} ${
        isIncrease ? style.PriceTicker__increase : style.PriceTicker__decrease
      }`}
    >
      <h4 className={style.PriceTicker__name}>{tickerName}</h4>
      <div className={style.PriceTicker__elem}>
        <p>{tickerPrice}$</p>
      </div>
      <div className={style.PriceTicker__elem}>
        <p>
          {isIncrease ? "+" : "-"}
          {tickerChange}$
        </p>
      </div>
      <div className={style.PriceTicker__elem}>
        <ChangePercent
          tickerCode={tickerCode}
        />
      </div>
      <Button text={'подробнее'} tickerCode={tickerCode} onClick={onButtonClick}/>
    </div>
  );
}
