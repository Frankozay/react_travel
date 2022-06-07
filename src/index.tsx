import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import rootStore from "@/redux/store";
import axios from "axios";

import "./index.css";
import "antd/dist/antd.min.css";
import "@/i18n/configs";

import { Spin } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.headers["x-icode"] = "E6A985F04281F135";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={rootStore.store}>
    <PersistGate persistor={rootStore.persistor} loading={<Spin />}>
      <App />
    </PersistGate>
  </Provider>
);
