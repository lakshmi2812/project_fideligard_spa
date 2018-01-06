import { combineReducers } from "redux";

import {
  GET_STOCKS_REQUEST,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAILURE
} from "./actions";

const initialState = {
  user: {
    name: "User1",
    portfolio: [],
    transactions: [],
    funds: 100000
  },
  stocks: [],
  isFetching: false
};

export function stocks(state = initialState, action) {
  console.log("logging state in reducer", state);
  switch (action.type) {
    case GET_STOCKS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_STOCKS_SUCCESS:
      console.log("logging state in reducer", action.data);
      return {
        ...state,
        stocks: [...state.stocks, action.data],
        isFetching: false
      };
    case GET_STOCKS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export const stocksApp = combineReducers({ stocks });
