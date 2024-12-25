// src/reducers/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice"; // Adjust this path as needed

const rootReducer = combineReducers({
  posts: postsReducer, // Add all your feature reducers here
});

export default rootReducer;
