import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { tickerOperations } from "./redux/tickers";

import "./App.css";
import PriceTickers from "./components/PriceTickers";
import FormChangeInterval from "./components/FormChangeInterval";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tickerOperations.getDataSocket());
  }, [dispatch]);

  return (
    <>
      <PriceTickers />
      <FormChangeInterval />
    </>
  );
}
