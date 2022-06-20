import React from "react";
import styles from "./App.module.css";
import history from "./utils/history";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "@/redux/hooks";
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
  PlaceOrderPage,
} from "@/pages";
import { getShoppingCart } from "./redux/shoppingCart/slice";

const PrivateRoute = ({ children }) => {
  const jwt = useSelector((s) => s.user.token);
  return jwt ? children : <Navigate to="/signin" />;
};

const App: React.FC = React.memo(() => {
  const jwt = useSelector((s) => s.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <div className={styles.App}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route path="/search/:keywords?" element={<SearchPage />} />
          <Route
            path="/shoppingCart"
            element={
              <PrivateRoute>
                <ShoppingCartPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/placeOrder"
            element={
              <PrivateRoute>
                <PlaceOrderPage />
              </PrivateRoute>
            }
          />
          <Route element={<h1>404 not found 页面去火星了！</h1>} />
        </Routes>
      </HistoryRouter>
    </div>
  );
});

export default App;
