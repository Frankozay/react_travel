import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  SearchPage,
} from "@/pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords?" component={SearchPage} />
          <Route render={() => <h1>404 not found 页面去火星了！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
