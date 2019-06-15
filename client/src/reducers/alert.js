import { SET_ALERT, REMOVE_ALERT, RECEIVE_MESSAGE } from "../actions/types";

const initialState = [
    {conversation_id:"",from:"", to:"", text:""}
]


export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    case RECEIVE_MESSAGE:
    const { conversation_id, from, to, text } = payload
      console.log("YUHU")
      console.log(state)
      return [
        ...state,
        {
          conversation_id: conversation_id,
          from: from,
          to: to,
          text: text
        } 
      ]
    default:
      return state;
  }
}
