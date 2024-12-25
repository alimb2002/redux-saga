// src/sagas/index.ts
import { all } from "redux-saga/effects";
import { watchFetchPosts } from "../features/posts/postsSaga";

export default function* rootSaga() {
  yield all([watchFetchPosts()]);
}
