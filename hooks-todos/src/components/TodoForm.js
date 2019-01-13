import React, { useState, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {
    const [todo, setTodo] = useState('');
    const { dispatch } = useContext(TodosContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo })
        setTodo('');
    }

    return (
        <form
            className="flex justify-center p-5"
            onSubmit={handleSubmit}>
            <input 
                type="text"
                className="border-black border-solid border-2"
                onChange={event => setTodo(event.target.value)}
                value={todo}/>
        </form>
    )
}