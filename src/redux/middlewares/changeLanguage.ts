import i18n from "i18next";
import { Middleware } from "redux";
import { CHANGE_LANGUAGE } from "../language/constants";

export const changeLanguage: Middleware = (store) => (next) => (action) => {
  if (action.type === CHANGE_LANGUAGE) {
    i18n.changeLanguage(action.payload);
  }
  next(action);
};
