import { combineReducers } from 'redux';

import {
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  GET_STOCK_FAILURE
} from './actions';

const initialState = {
  user: {
    name: 'User1',
    portfolio: [],
    transactions: [],
    funds: 100000
  },
  stocks: []
};
