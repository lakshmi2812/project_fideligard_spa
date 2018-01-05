import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Header from "./Header";
import PageContainer from "../containers/PageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fideligard</h1>
        </Header>
        <PageContainer />
      </div>
    );
  }
}

export default App;
