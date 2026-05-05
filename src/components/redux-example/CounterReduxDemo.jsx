import { Provider, useDispatch, useSelector } from "react-redux"
import store from "../../redux/store";
import { decrease, increase } from "../../redux/countSlice";

function Counter(){
    console.log("Counter component Rendered")
    const count = useSelector(state => state.counter.count);
    return(
        <div>
            <h1>Counter Demo Using Redux</h1>
            <h3>Count: {count}</h3>
        </div>
    )
}

function Increase(){
     console.log("Increase component Rendered")
    const dispatch = useDispatch();
    return(
        <button onClick={() => dispatch(increase())}>
            Increase
        </button>
    )
}

function Decrease(){
     console.log("Decrease component Rendered")
    const dispatch = useDispatch();
    return(
        <button onClick={() => dispatch(decrease())}>
            Increase
        </button>
    )
}

const CounterReduxDemo = () =>{
    return(
        <Provider store={store}>
            <Counter />
            <Increase />
            <Decrease />
        </Provider>
    )
}

export default CounterReduxDemo;