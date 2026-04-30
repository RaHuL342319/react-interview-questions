import { useEffect, useState } from "react";

export default function useTodo(){
   const [todo, setTodo] = useState({});

  async function getTodo(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    setTodo(json)
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getTodo();
  },[])

  return todo;
}