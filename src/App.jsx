import { useEffect, useState } from "react";
import CounterClass from "./components/class-based/CounterClass";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import MyComponent from "./components/error-boundary/MyComponent";

export default function App() {
  const [count, setCount] = useState(0)
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);
  }, []);

  function increaseCounter(){
    setCount(prev => prev + 1)
  }
  return (
    <div>
      <b>Hi there</b>
      {/* <Counter /> */}
      {counterVisible && <CountDownClock />}
      <Counter1 count={count}/>
      <button onClick={increaseCounter}>increase counter</button>
      <br />
      <br />
      {/* Class based components */}
      <CounterClass />
      {/* Countdown in classbased */}
      <CountDownClock />
      {/* Error Boundary example */}
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((count) => count + 1);
  }

  function decreaseCount() {
    setCount((count) => count - 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
  );
}

function CountDownClock() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
    // on mount
    let clock = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // cleanup : stop the clock : unmount
    return () => {
      console.log("on unmount");
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}


function ExampleForMountAndUnmount(){
  useEffect(() => {
    console.log("Mount");

    return(function(){
      console.log("Unmount")
    })
  }, []);
  return(
    <div>
      Example
    </div>
  )
}

function Counter1(props){

  return(
    <div>
      Counter {props.count}
    </div>
  )
}
