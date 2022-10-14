import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState<number>(0)

    function onIncrease() {
        setCount(count + 1);
    }

    function onDecrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;