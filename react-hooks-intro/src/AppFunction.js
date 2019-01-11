import React, { useState } from 'react';

const App = () => {

    // [variable, setState] = hook(initialState)
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count+1);
    }

    return (
        <div>
            <div>useState Hook</div>
            <button onClick={incrementCount}>I was clicked {count} times</button>
        </div>
        
    )
}

export default App;