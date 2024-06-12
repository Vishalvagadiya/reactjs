import logo from './logo.svg';
import './App.css';
import Api from './Component/Api';
import { useEffect, useState } from 'react';

function App() {
  const [arr, setArr] = useState([]);
  const [state, setState] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setState(value);
  }

  function handleAddProduct() {
    setSearchQuery(state);
  }

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=46e7855`)
        .then((res) => res.json())
        .then((el) => {
          setArr(el.Search || []);
        })
        .catch((err) => console.error('Error fetching data:', err));
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <input type="search" placeholder="Search" name="s" value={state} onChange={handleChange} />
      <button type="button" onClick={handleAddProduct}>Search</button>
      <Api data={arr} />
    </div>
  );
}

export default App;
