import { changeTicker } from "./tickers-actions";
import socket from "../../socket";

export const getDataSocket = () => (dispatch) => {
  socket.emit("start");
  socket.on("ticker", (data) => {
    data.forEach((elem) => dispatch(changeTicker(elem)));
  });
};
