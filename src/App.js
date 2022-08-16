import "./App.css";

import { CounterContext } from "./global/counterContext";

import CounterOne from "./components/CounterOne/CounterOne";
import CounterTwo from "./components/CounterTwo/CounterTwo";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <CounterOne />
      <CounterTwo />
    </CounterContext.Provider>
  );
}

export default App;
