// import thunk from "redux-thunk";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

// import { createStore, applyMiddleware } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { actionLog, changeLanguage } from "./middlewares";
import { productDetailSlice } from "./productDetail/slice";
import { productSearchSlice } from "./productSearch/slice";

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
});

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, actionLog, changeLanguage)
// );
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionLog, changeLanguage),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
