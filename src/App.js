// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; // , useEffect
import axios from 'axios';

function App() {
  const [ hero, setHero ] = useState('Loading...');

  return (
    <div className="App">
      <header className="App-header">
        {/* { show ? 
          (<img src={logo} className="App-logo" alt="logo" />)
        : null}  */}
        <form onSubmit ={ async (ev) => {
          ev.preventDefault();
          const formData = new FormData(ev.target);
          const val = formData.get('number');
          const url = 'https://swapi.dev/api/people/';
          const messenge = await axios.get(url+val);
          setHero(messenge.data.name);
        }}>
          <input type='text' placeholder='Введіть номер персонажа' name='number'/>
          {hero} 
          <button type='submit'>Запросити</button>
        </form>
      </header>
    </div>

  );
}

export default App;
