// src/components/Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store"; // Ensure this path is correct
import { increment, decrement } from "../features/counter/counterSlice";
import { useEffect } from "react";
import { FETCH_COUNTER_DATA } from "../features/counter/counterTypes";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    // Dispatch the action to fetch data on mount
    dispatch({ type: FETCH_COUNTER_DATA });
  }, [dispatch]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
