import i18n from "i18next";
import { Middleware } from "redux";

export const changeLanguage: Middleware = (store) => (next) => (action) => {
  if (action.type === "language/changeLanguage") {
    i18n.changeLanguage(action.payload);
  }
  next(action);
};
