// import uuidv4 from 'uuid/v4';

export default function reducer(state, action) {
    switch(action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload
            }
        case 'ADD_TODO':
            // // if empty text, do not add empty item; return state
            // if (!action.payload) {
            //     return state;
            // }
            // // if text matches existing todo text, return an index # and return boolean
            // // if returns a positive index, evaluates to true
            // if (state.todos.findIndex(t => t.text === action.payload) > -1) {
            //     return state;
            // }
            const addedTodos = [...state.todos, action.payload];
            return {
                ...state,
                todos: addedTodos
            }
        case 'SET_CURRENT_TODO':
            return {
                ...state,
                currentTodo: action.payload 
            }
        case 'TOGGLE_TODO':
            const toggledTodos = state.todos.map( t => 
                t.id === action.payload.id ? action.payload : t );
            return {
                ...state,
                todos: toggledTodos
            }
        case 'UPDATE_TODO':
            // // if empty text, do not add empty item; return state
            // if (!action.payload) {
            //     return state;
            // }
            // // if text matches existing todo text, return an index # and return boolean
            // // if returns a positive index, evaluates to true
            // if (state.todos.findIndex(t => t.text === action.payload) > -1) {
            //     return state;
            // }
            const updatedTodo = {
                ...action.payload
            }
            const updatedTodoIndex = state.todos.findIndex( t => t.id === state.currentTodo.id);
            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            }
        case 'REMOVE_TODO':
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return {
                ...state,
                currentTodo: isRemovedTodo,
                todos: filteredTodos
            }
        default:
            return state;
    }
}