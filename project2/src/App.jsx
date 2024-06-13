import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(true); 
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/`)
      .then(res => res.json())
      .then((res) => {
        setArr(res.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [state]);

  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Click to change</button>
      {loading && <p>Loading...</p>}
      {arr.map((el, index) => (
        <div key={index} className="card">
          <img src={el.picture.large} alt={`${el.name.first} ${el.name.last}`} className="card-img" />
          <div className="card-info">
            <p className="card-name">{el.name.title}. {el.name.first} {el.name.last}</p> <br/>
            <p className="card-gender"><b>Gender:</b> {el.gender}</p> <br/>
            <p className="card-email"><b>Email:</b> {el.email}</p> <br/>
            <p className="card-phone"><b>Phone:</b> {el.phone}</p> <br/>
            <p className="card-address"><b>Location:</b> {el.location.street.number}, {el.location.street.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
