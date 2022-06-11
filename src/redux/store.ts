// import thunk from "redux-thunk";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

// import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { changeLanguage } from "./middlewares";
import { productDetailSlice } from "./productDetail/slice";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";
import { shoppingCartSlice } from "./shoppingCart/slice";
import { orderSlice } from "./order/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "shoppingCart"],
};

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  order: orderSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, actionLog, changeLanguage)
// );
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(changeLanguage),
  devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

const exports = {
  store,
  persistor,
};

export default exports;
