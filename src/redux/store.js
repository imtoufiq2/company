import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import bankReducer from "./bankSlice";
import rootReducer from "./reducers/index";
import rootSaga from "../sagas";
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

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export { store };
