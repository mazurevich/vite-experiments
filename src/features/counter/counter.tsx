import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { increment, decrement } from "./slice";

export const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button type="button" onClick={handleIncrement}>Inc</button>
      <button type="button" onClick={handleDecrement}>Dec</button>
    </div>
  );
};
