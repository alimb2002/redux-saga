// // src/hooks/useCounter.ts
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store";
// import { increment, decrement } from "../features/counter/counterSlice";

// export const useCounter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state: RootState) => state.counter.value);

//   const incrementCounter = () => dispatch(increment());
//   const decrementCounter = () => dispatch(decrement());

//   return {
//     counter,
//     incrementCounter,
//     decrementCounter,
//   };
// };
