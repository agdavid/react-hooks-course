import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();
  
  useEffect(()=>{
    getResults();
  }, []);
  
  const getResults = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      setResults(response.data.hits);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  }
  
  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  }

  return (
    <div
      className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest shadow-lg rounded">
      <img 
        src="https://icon.now.sh/react/c0c" 
        alt="react logo"
        className="float-right h-12" />
      <h1
        className="text-grey-darkest font-thin">Hooks News</h1>
      <form
        onSubmit={handleSearch}
        className="mb-2">
        <input 
          type="text"
          onChange={event=>setQuery(event.target.value)}
          value={query}
          ref={searchInputRef}
          className="border p-1 rounded"/>
        <button 
          type="submit"
          className="bg-orange rounded m-1 p-1">Search</button>
        <button 
          type="button" 
          onClick={handleClearSearch}
          className="bg-teal text-white p-1 rounded">Clear</button>
      </form>
      { isLoading ? 
        (<div
        className="font-bold text-orange-dark">Loading results...</div>) : 
        (<ul
          className="list-reset leading-normal">
        {results.map(result => (
          <li 
          key={result.objectID}>
            <a 
              href={result.url}
              className="text-indigo-dark hover:text-indigo-darkest">{result.title}</a>
          </li>
        ))}
        </ul>)}

      {error && <div>className="text-red font-bold">{error.message}</div>}
    </div>
  );
}