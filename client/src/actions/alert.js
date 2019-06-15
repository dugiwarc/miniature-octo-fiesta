import uuid from "uuid";
import io from "socket.io-client";


import { SET_ALERT, REMOVE_ALERT, RECEIVE_MESSAGE } from "./types";
let socket = io.connect("http://localhost:5000");
socket.on("chat-message", msg => console.log("MESSAGE ON", msg));

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const sendMessage = (data) => dispatch => {
  console.log(data)
  socket.emit("chat-message", data);
  console.log("MESSAGE EMIT", data);
  dispatch({ type: RECEIVE_MESSAGE, payload: data });

  // dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
};
