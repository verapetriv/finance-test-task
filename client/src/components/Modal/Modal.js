import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { tickersSelectors } from "../../redux/tickers";
import style from "./Modal.module.css";

import ChangePercent from "../ChangePercent";

export default function Modal({ tickerCode, onClose }) {
  const tickerPrice = useSelector((state) =>
    tickersSelectors.getTickerPrice(state, tickerCode)
  );
  const tickerChange = useSelector((state) =>
    tickersSelectors.getTickerChange(state, tickerCode)
  );
  const tickerDividend = useSelector((state) =>
    tickersSelectors.getTickerDividend(state, tickerCode)
  );
  const tickerYield = useSelector((state) =>
    tickersSelectors.getTickerYield(state, tickerCode)
  );
  const tickerLastTradeTime = useSelector((state) =>
    tickersSelectors.getTickerLastTradeTime(state, tickerCode)
  );
  const tickerName = useSelector((state) =>
    tickersSelectors.getTickerName(state, tickerCode)
  );
  const isIncrease = useSelector((state) =>
    tickersSelectors.getIsIncrease(state, tickerCode)
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = ({ code }) => {
    code === "Escape" && onClose();
  };

  const onBackdropClick = ({ target, currentTarget }) => {
    target === currentTarget && onClose();
  };

  const getNormilizedTime = (data) => {
    const arr = data.split("");
    const time = data.slice(arr.indexOf("T") + 1, arr.indexOf("T") + 9);
    const date = data.slice(0, arr.indexOf("T")).split("-").reverse().join("-");

    return (
      <>
        <p>{time} </p>
        <p>{date}</p>
      </>
    );
  };

  return (
    <div className={style.Modal__backdrop} onClick={onBackdropClick}>
      <div
        className={`${style.Modal__content} ${
          isIncrease
            ? style.Modal__content_increase
            : style.Modal__content_decrease
        }`}
      >
        <h4 className={style.Modal__title}>{tickerName}</h4>
        <div className={style.Modal__wrapper}>
          <div className={style.Modal__box}>{tickerPrice}$</div>
          <div className={style.Modal__box}>
            {isIncrease ? "+" : "-"}
            {tickerChange}$
          </div>
          <div className={style.Modal__box}>
            <ChangePercent
              tickerCode={tickerCode}
            />
          </div>
        </div>
        <div className={style.Modal__wrapper}>
          <div>
            <p className={style.Modal__text}>Дивиденди:</p>
            <div className={style.Modal__box + " " + style.Modal__elem}>
              {tickerDividend}%
            </div>
          </div>
          <div>
            <p className={style.Modal__text}>Доход:</p>
            <div className={style.Modal__box + " " + style.Modal__elem}>
              {tickerYield}%
            </div>
          </div>
          <div>
            <p className={style.Modal__text}>Последняя сделка:</p>
            <div
              className={
                style.Modal__box +
                " " +
                style.Modal__elem +
                " " +
                style.Modal__elem_minSize
              }
            >
              {getNormilizedTime(tickerLastTradeTime)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
