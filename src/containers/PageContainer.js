import { connect } from 'react-redux';
import React, { Component } from 'react';
import Components from '../components/ExportComponents';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import { getStocks } from '../actions';

const { Date, Header, Portfolio, Stocks, Trade, Transaction } = Components;

class PageContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStocks();
  }

  render() {
    return (
      <div>
        <Date />
        <Stocks />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    stocks: state.stocks
  };
};

//*redux store connection stuff
// With bindActionCreators()
// Import the helper function

const mapDispatchToProps = dispatch => {
  // Create an object with the action creators
  // (or, import them as a named object)
  // const actions = {
  //   getStocks
  // };

  // Returns exactly the same code as above
  return {
    getStocks: () => {
      dispatch(getStocks());
    }
  };
};

PageContainer = connect(mapStateToProps, mapDispatchToProps)(PageContainer);

export default PageContainer;
