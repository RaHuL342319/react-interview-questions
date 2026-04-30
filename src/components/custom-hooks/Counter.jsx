import useCounter from "../../hooks/useCounter";



export default function Counter() {
  const {count, increaseCount} = useCounter();

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={increaseCount}>Increase</button>
    </div>
  )
}