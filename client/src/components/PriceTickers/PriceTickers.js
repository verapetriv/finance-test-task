import React, { useState } from "react";
import { useSelector } from "react-redux";

import { tickersSelectors } from "../../redux/tickers";
import style from "./PriceTickers.module.css";

import PriceTicker from "../PriceTicker";
import Modal from "../Modal";

export default function PriceTickers() {
  const [tickerNameForModal, setTickerNameForModal] = useState(null);

  const tickersList = useSelector(tickersSelectors.getTickersList);

  const onButtonClick = (e) => {
    setTickerNameForModal(e.currentTarget.name);
  };

  const onCloseModal = () => {
    setTickerNameForModal(null);
  };

  return (
    <>
      {tickerNameForModal && (
        <Modal tickerCode={tickerNameForModal} onClose={onCloseModal} />
      )}
      <div className={style.PriceTickersList}>
        <h2 className={style.header}>Акции</h2>
        <ul className={style.list}>
          {tickersList.map((ticker) => (
            <PriceTicker
              key={ticker}
              tickerCode={ticker}
              onButtonClick={onButtonClick}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
