import React, { useState } from 'react'

function FunctionHooks() {

    const [count, setCount] = useState(0)
    
    return (
        <div>
            <span>{count}</span>
            <button onClick = { () => setCount(count + 1)}>clickMe</button>
        </div>
    )
}

export default FunctionHooks
