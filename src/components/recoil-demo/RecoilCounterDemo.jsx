import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../../store/atoms/counter";

function Counter() {
    return(
        <div>
            <CurrentCount />
            <Increase />
            <Decrease />
        </div>
    )
}

function CurrentCount(){
    const count = useRecoilValue(counterAtom);

    return(<div>
        <h1>Counter using recoil: </h1>
        <h3>Counter : {count}</h3>
    </div>)
}

function Increase(){
    const setCount = useSetRecoilState(counterAtom);
    return(
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
        </div>
    )
}

function Decrease(){
    const setCount = useSetRecoilState(counterAtom)
    return(
        <div>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        </div>
    )
}
function RecoilCounterDemo(){
    return(
        <RecoilRoot>
            <Counter/>
        </RecoilRoot>
    )
}

export default RecoilCounterDemo;