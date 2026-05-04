import { useContext } from "react";
import CounterContext from "../context/CounterContext";
import CounterContextProvider from "../context/CounterContextProvider";

export default function ContextCounter() {
  return (
    <CounterContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CounterContextProvider>
  );
}

function Decrease() {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Increase() {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const { count } = useContext(CounterContext);
  return <p>Count: {count}</p>;
}
