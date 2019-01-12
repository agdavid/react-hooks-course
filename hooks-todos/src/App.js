import React, { useContext } from 'react';
import { UserContext } from './index';

export default function App() {

  const value = useContext(UserContext);

  return (
    <div>
      Hello, {value}
    </div>
  );
};
