// src/reducers/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; // Adjust this path as needed

const rootReducer = combineReducers({
  counter: counterReducer, // Add all your feature reducers here
});

export default rootReducer;
