import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "./reposReducers";

const rootReducer = combineReducers({
  repos: reposReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  // thunk ввімкнено за замовчуванням
  devTools: process.env.NODE_ENV !== "production",
  // DevTools лише в режимі розробки
});
