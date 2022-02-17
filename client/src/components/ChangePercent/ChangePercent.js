import React from "react";
import { useSelector } from "react-redux";

import { tickersSelectors } from "../../redux/tickers";

import style from "./ChangePercent.module.css";

import { pink } from "@mui/material/colors";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ChangePercent({ tickerCode }) {
  const tickerChangePercent = useSelector((state) =>
    tickersSelectors.getTickerChangePercent(state, tickerCode)
  );
  const isIncrease = useSelector((state) =>
    tickersSelectors.getIsIncrease(state, tickerCode)
  );

  return (
    <div className={style.ChangePercent}>
      <span>
        {isIncrease ? (
          <ArrowUpwardIcon color="success" fontSize="small" />
        ) : (
          <ArrowDownwardIcon sx={{ color: pink[500] }} fontSize="small" />
        )}
      </span>
      <p>{tickerChangePercent}%</p>
    </div>
  );
}
