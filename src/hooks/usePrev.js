import { useEffect, useRef } from "react";

export default function usePrev(value){
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    },[value])

    // eslint-disable-next-line react-hooks/refs
    return ref.current;
}

// It returns first, effect gets called later