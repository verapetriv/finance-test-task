import React, { useState } from "react";
import socket from "../../socket";

import style from "./FormChangeInterval.module.css";

import Button from "../Button";

export default function FormChangeInterval() {
  const [inputValue, setInputValue] = useState("");
  const [wrongNumber, setWrongNumber] = useState(false);

  const onInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue < 1) {
      setInputValue("");
      setWrongNumber(true);
      setTimeout(() => setWrongNumber(false), 1000);
      return;
    }
    socket.emit("changeInterval", inputValue * 1000);
    setInputValue("");
  };

  return (
    <form className={style.FormChangeInterval}>
      <p className={style.FormChangeInterval__text}>
        Укажите время интервала изменения данных в секундах:
      </p>
      <input
        className={wrongNumber ? style.FormChangeInterval__input_error : ""}
        type="number"
        min="1"
        value={inputValue}
        onChange={onInputChange}
      />
      <Button text={"изменить"} onClick={onSubmit} />
    </form>
  );
}
