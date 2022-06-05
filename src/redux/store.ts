import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { actionLog, changeLanguage } from "./middlewares";

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, actionLog, changeLanguage)
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
