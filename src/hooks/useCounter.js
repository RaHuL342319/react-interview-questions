// custom hook: function wjich starts with use and uses another builtin hook
import { useState } from "react";
export default function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(prev => prev + 1);
  }

  return{
    count: count,
    increaseCount: increaseCount
  }
}