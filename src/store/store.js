import { compose, applyMiddleware, legacy_createStore } from "redux";

// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
// import { configureStore } from "@reduxjs/toolkit";

//root-reducer
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [logger],
// });

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:", store.getState());

  next(action);

  console.log("next state:", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers
);
