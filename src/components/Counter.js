import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: 'incrementBy5' });
  };

  const decrementBy5Handler = () => {
    dispatch({ type: 'decrementBy5' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementBy5Handler}>Increment by 5</button>
      <button onClick={decrementBy5Handler}>Decrement by 5</button>
    </main>
  );
};

export default Counter;
