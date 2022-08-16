import { useEffect } from "react";
import { useContext } from "react";
import { CounterContext } from "../global/counterContext";

import { usePubSub } from "./usePubSub";

function useCounter() {
  const { counter, setCounter } = useContext(CounterContext);
  const [subscribe, unsubscribe, publish] = usePubSub();

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
    let counterLocalStorage;
    if (counterLocalStorage) {
      setCounter(counterLocalStorage);
    }
    counterLocalStorage = JSON.parse(localStorage.getItem("counter"));
  }, [counter]);

  const increment = () => {
    console.log("counter INCREMENTED!");
    setCounter((prevCount) => prevCount + 1);
    publish("countIncremented", counter);
    subscribe("countDecremented", decrement);
    subscribe("countReset", reset);
    unsubscribe("countDecremented", decrement);
    unsubscribe("countReset", reset);
  };

  const decrement = () => {
    console.log("counter DECREMENTED!");
    setCounter((prevCount) => prevCount - 1);
    publish("countDecremented", counter);
    subscribe("countIncremented", increment);
    subscribe("countReset", reset);
    unsubscribe("countIncremented", increment);
    unsubscribe("countReset", reset);
  };

  const reset = () => {
    console.log("counter RESETED!");
    setCounter(0);
    publish("countReset", counter);
    subscribe("countIncremented", increment);
    subscribe("countDecremented", decrement);
    unsubscribe("countIncremented", increment);
    unsubscribe("countDecremented", decrement);
  };

  return [counter, increment, decrement, reset];
}

export default useCounter;
