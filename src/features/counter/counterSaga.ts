import { call, put, takeEvery } from "redux-saga/effects";
import { setCounter } from "./counterSlice";
import { FETCH_COUNTER_DATA } from "./counterTypes";

// Define a type for the API response (for better type safety)
interface Post {
  id: number;
  title: string;
  body: string;
}

// Worker Saga: This performs the actual side effect (like an API call)
function* fetchCounterData(): Generator<unknown, void, Post[]> {
  try {
    // Step 1: Fetch data from the API using `fetch` and get the `Response`
    const response: Response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/posts"
    );

    // Step 2: Ensure the response is valid (status code 200-299)
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Step 3: Parse the response body as JSON
    const data: Post[] = yield call([response, "json"]); // Correctly parse the response

    // Step 4: Dispatch action to set the counter value based on the length of the fetched posts array
    yield put(setCounter(data.length));
  } catch (error) {
    console.error("Error fetching counter data", error);
  }
}

// Watcher Saga: Watches for the `FETCH_COUNTER_DATA` action
function* watchFetchCounterData() {
  yield takeEvery(FETCH_COUNTER_DATA, fetchCounterData);
}

export default watchFetchCounterData;
