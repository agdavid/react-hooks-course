import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div
            style={{
                textAlign: 'center'
            }}
        >
            <h2>Login</h2>
            <form
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}
                >
                <input 
                    type="text"
                    placeholder="Username"
                    onChange={event => setUsername(event.target.value)}/>
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={event => setPassword(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}