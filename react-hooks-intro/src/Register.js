import React, { useState } from 'react';

export default function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [user, setUser] = useState(null);

    const handleChange = (event) => {
        setForm({
            ...form, // use spread operator for current values
            [event.target.name]: event.target.value // replace single form input value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(form); // user = form
    }

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
                onSubmit={handleSubmit}
                >
                <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange} />
                <input 
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange} />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            {user && JSON.stringify(user, null, 2)}
        </div>
    );
};