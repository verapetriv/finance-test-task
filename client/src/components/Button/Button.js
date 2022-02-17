import React from "react";

import style from "./Button.module.css";

export default function Button({ text, onClick, tickerCode }) {
  return (
    <button
      type="submit"
      name={tickerCode}
      className={style.Button}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
