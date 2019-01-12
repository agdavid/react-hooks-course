import React from 'react';
import { UserContext } from './index';

// user consumer to get values from parent component via context
export default function App() {
  return (
    <UserContext.Consumer>
      {(value) => { 
        return (
          <div>Hello, {value}</div>
        )
      }}
    </UserContext.Consumer>
  );
};
