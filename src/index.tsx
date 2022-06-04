import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "@/redux/store";
import "./index.css";

import "antd/dist/antd.min.css";
import "@/i18n/configs";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
