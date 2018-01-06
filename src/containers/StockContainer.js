import { connect } from "react-redux";
import React, { Component } from "react";
import Components from "../components/ExportComponents";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import { getStocks } from "../actions";

const { Stocks } = Components;

class StockContainer extends Component {
  // constructor(props) {
  //   super();
  //   this.state = this.props;
  //   console.log("state", this.state);
  // }
  render() {
    console.log(this.props);
    //props.stocks.map(stock => {});
    return (
      <div>
        <div className="card" style={{ width: "20px" }}>
          <div className="card-block">
            <h4 className="card-title">Stocks</h4>
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th />
                  <th />
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <Stocks stock={this.props.stocks[0]} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    stocks: state.stocks
  };
};

StockContainer = connect(mapStateToProps, null)(StockContainer);

export default StockContainer;
