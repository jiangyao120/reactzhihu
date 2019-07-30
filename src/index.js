import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { GrobalStyle } from "./globelstyle";
import { Provider } from "react-redux";
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <GrobalStyle /> {/* 全局样式 */}
    <App />
  </Provider>,
  document.getElementById("root")
);
