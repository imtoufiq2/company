import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import bankReducer from "./bankSlice";
import allBankSlice from "./slice/allBankSlice";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
// const loggerMiddleware = logger({
//   predicate: (getState, action) => !action.type.startsWith("@@redux-form"),
// });

const middleware = (getDefaultMiddleware) => {
  const customMiddleware = [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    // loggerMiddleware,
  ];

  // Add logger middleware only in development environment
  if (process.env.NODE_ENV === "development") {
    customMiddleware.push(logger);
  }

  return customMiddleware;
};

export const store = configureStore({
  reducer: {
    banks: allBankSlice,
  },
  middleware,
});
// sagaMiddleware.run(rootSaga);
