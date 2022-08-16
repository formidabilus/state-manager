import React from "react";

import "../../styles/Counter.styles.css";

import useCounter from "../../hooks/useCounter";

function CounterOne() {
  const [counter, increment, decrement, reset] = useCounter();

  return (
    <div className="counter-container">
      <h3 className="counter-state">CounterOne state = {counter}</h3>
      <div className="buttons-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
