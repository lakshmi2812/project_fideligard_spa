import { connect } from 'react-redux';
import React from 'react';
import Components from '../components/ExportComponents';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import { getStocks } from '../actions';

const { Stocks } = Components;

const StockContainer = ({ props }) => {
  props.stocks.map(stock => {});
  return;
  <Stocks />;
};

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStocks: () => {
      dispatch(getStocks());
    }
  };
};

StockContainer = connect(mapStateToProps, mapDispatchToProps)(StockContainer);

export default StockContainer;
