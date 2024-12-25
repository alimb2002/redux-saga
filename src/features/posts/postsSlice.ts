// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "./postsTypes";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions;
export default postsSlice.reducer;
