import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  
  useEffect(()=>{
    getResults();
  }, []);
  
  const getResults = async () => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
    setResults(response.data.hits);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  }
  
  const handleClearSearch = () => {
    setQuery("");
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
      >
        <input 
          type="text"
          onChange={event=>setQuery(event.target.value)}
          value={query}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>Clear</button>
      </form>
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