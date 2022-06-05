import { Middleware } from "redux";

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log("state before ", store.getState());
  console.log("fire action ", action);
  next(action);
  console.log("state after", store.getState());
};
