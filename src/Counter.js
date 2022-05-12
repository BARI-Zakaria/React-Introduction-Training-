import React, { useState } from 'react';

function Counter() {
    const [counter, setCount]=useState(0)
    function handleClick(){
        setCount(counter+1)
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <span>{counter}</span>    
        </div>
    );
}

export default Counter;