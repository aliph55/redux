import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispach = useDispatch();

  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispach(counterAction.increment());
  };

  const increaseHandler = () => {
    dispach(counterAction.increase(10));
  };

  const decrementHandler = () => {
    dispach(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispach(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
