import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";

import { rootSaga } from "./root-saga.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  process.env.NODE_ENV !== "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// import { compose, createStore, applyMiddleware } from "redux";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
// import { thunk } from "redux-thunk";

// import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [process.env.NODE_ENV !== "development" && logger].filter(
//   Boolean
// );

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const componentEnhancer = composeEnhancer(applyMiddleware(...middleware));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   componentEnhancer
// );

// export const persistor = persistStore(store);
