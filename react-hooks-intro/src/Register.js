import React from 'react';

export default function Register() {
    return (
        <div
            style={{
                textAlign: 'center'
            }}
        >
            <h2>Register</h2>
            <form
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}
                >
                <input 
                    type="text"
                    placeholder="Username" />
                <input 
                    type="email"
                    placeholder="Email Address" />
                <input 
                    type="password"
                    placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};