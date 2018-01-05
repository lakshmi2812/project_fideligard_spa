import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import thunk from "redux-thunk";

//-----------------------
//react-redux store items
//-----------------------

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { getStocks } from "./actions";

// Import our reducer to use when we create the store
import { stocksApp } from "./reducers.js";

let store = createStore(stocksApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
