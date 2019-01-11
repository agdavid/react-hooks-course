import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [results, setResults] = useState([]);
  
  // in this manner, we send off infinite loop of requests
  // useEffect is run on every (re)render
  // the update of results, triggers another render, another useEffect, ad infinitum
  useEffect(()=> {
    axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);
      })
  });
  
  return (
    <div>
      App
    </div>
  );
}