import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  
  // improper way to use async/await in useEffect
  useEffect(async ()=> {
    const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
    setResults(response.data.hits);  
      // .then(response => {
      //   setResults(response.data.hits);
      // })
    // passing the second argument lists the "dependencies" that trigger useEffect
    // the empty array means no dependencies, run only on component mount and not update
    }, []);
  
  return (
    <>
      <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}