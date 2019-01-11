import React, { useState, useEffect } from 'react';

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
};

const App = () => {

    // [variable, setState] = hook(initialState)
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null }); // initialState can be any JavaScript type; here {object}
    // navigator is a browser API
    const [status, setStatus] = useState(navigator.onLine) // initialState with value from external API
    const [{ latitude, longitude, speed }, setLocation] = useState(initialLocationState)

    // side effect (interact with outside world) in functional component
    // effect function (e.g., state change) executed after every render
    // efficient way to replace componentDidMount componentDidUpdate

    // navigator API does not have support like 'removeEventListener'
    // set variable to cleanup effect    
    let mounted = true;

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        navigator.geolocation.getCurrentPosition(handleGeolocation);
        const watchId = navigator.geolocation.watchPosition(handleGeolocation);
    
        // replicate componentWillUnmount
        // cleanup side effect on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            navigator.geolocation.clearWatch(watchId);
            mounted = false;
        }
        // second argument contains "dependent values"
        // effect is conditionally triggered if values in [] change
        // empty array means "no variables trigger change" => effect will only run on mount and unmount
    // }, []);
        // values mean "this variable triggers change" => effect will run on change of that value
    }, [count]);

    const handleGeolocation = (event) => {
        if (mounted) {
            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed
            });
        }
    }

    const handleOnline = () => {
        setStatus(true);
    };

    const handleOffline = () => {
        setStatus(false);
    }

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
            
            <h2>Mouse Position - useState, useEffect Hook</h2>
            {JSON.stringify(mousePosition, null, 2)}
            <br />

            <h2>Network Status - useState, useEffect Hook</h2>
            <p> You are <strong>{status ? "online" : "offline"}</strong></p>

            <h2>Geolocation - useState, useEffect Hook</h2>
            <p>Latitude is {latitude}</p>
            <p>Longitude is {longitude}</p>
            <p>Speed is {speed ? speed : 'O'}</p>
        </>
        
    )
}

export default App;