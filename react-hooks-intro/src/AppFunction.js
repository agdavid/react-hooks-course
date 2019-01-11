import React, { useState, useEffect } from 'react';

const App = () => {

    // [variable, setState] = hook(initialState)
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null }); // initialState can be any JavaScript type; here {object}

    // side effect (interact with outside world) in functional component
    // effect function (e.g., state change) executed after every render
    // efficient way to replace componentDidMount componentDidUpdate
    useEffect(() => {
        document.title = `You have clicked ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);
    
        // replicate componentWillUnmount
        // cleanup side effect on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    });

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.pageX,
            y: event.pageY
        });
    }

    const incrementCount = () => {
        setCount(prevCount => prevCount+1);
    }

    const toggleLight = () => {
        setIsOn( prevIsOn => !isOn);
    }
    return (
        <>
            <h2>Counter - useState Hook</h2>
            <button onClick={incrementCount}>I was clicked {count} times</button>

            <h2>Toggle Light - useState Hook</h2>
            <img
                src={
                    isOn ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa'
                }
                style={{
                    height: "50px",
                    width: "50px",
                }}
                alt="Flashlight"
                onClick={toggleLight} />
            
            <h2>Mouse Position</h2>
            {JSON.stringify(mousePosition, null, 2)}
            <br />
        </>
        
    )
}

export default App;