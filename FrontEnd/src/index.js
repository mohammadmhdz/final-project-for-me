import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./frontend/approuter";
// Use For Switch
import "react-toggle-switch/dist/css/switch.min.css";

import store from "./store";
import { Provider } from "react-redux";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
