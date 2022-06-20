import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import rootStore from "@/redux/store";

import "./index.css";
import "antd/dist/antd.min.css";
import "@/i18n/configs";

import { Spin } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { injectStore } from "@/utils";

injectStore(rootStore.store);

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
