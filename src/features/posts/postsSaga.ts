// src/sagas/postsSaga.ts
import { takeEvery, call, put } from "redux-saga/effects";
import { fetchPostsSuccess, fetchPostsFailure } from "./postsSlice";
import { fetchApi } from "../../utils/api"; // Import the custom fetchData function
import { FETCH_POSTS_REQUEST } from "./postsTypes";

interface Post {
  id: number;
  title: string;
  body: string;
}

// Worker saga for fetching posts
function* fetchPostsSaga() {
  try {
    const posts: Post[] = yield call(fetchApi, "/posts"); // Use the custom fetchData function
    yield put(fetchPostsSuccess(posts)); // Dispatch success action
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(fetchPostsFailure(error.message)); // Dispatch failure action
    } else {
      yield put(fetchPostsFailure("An unknown error occurred")); // Handle unexpected error types
    }
  }
}

// Watcher saga for posts
export function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}
