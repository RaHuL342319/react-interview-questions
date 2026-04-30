import { useState } from "react"
import usePrev from "../../hooks/usePrev";

export default function PrevValue(){
    const [value, setValue] = useState(0);
    const prevValue = usePrev(value);
    
    function incrementValue(){
        setValue(value => value+1)
    }


    return(
        <div>
            <p>The Current value is {value}</p>
            <button onClick={incrementValue}>Increment</button>
            <p>The Previous value is {prevValue}</p>
        </div>
    )
}