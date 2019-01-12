import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// create context with reference
// Context = { Provider: ..., Consumer: ... }
export const UserContext = createContext();
const username = "Dave";

// use provider to share values with child components via context
ReactDOM.render(
<UserContext.Provider value={username}>
    <App />
</UserContext.Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
