import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoute from './Routers/MainRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoute/>
    </div>
  );
}

export default App;
