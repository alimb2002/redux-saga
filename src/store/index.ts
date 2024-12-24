// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Export RootState and AppDispatch types for type safety
export type RootState = ReturnType<typeof store.getState>; // Type representing the entire Redux state
export type AppDispatch = typeof store.dispatch; // Type for dispatch

export default store;
