import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  
  // proper way to use async/await in useEffect
  useEffect(()=>{
    getResults();
  }, []);
  
    const getResults = async () => {
      const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
      setResults(response.data.hits);
    }
  
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