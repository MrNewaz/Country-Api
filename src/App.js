import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(countries);

  const handleClick = (x) => {
    const newCart = [...cart, x];
    setCart(newCart);
  };
  console.log(cart);

  return (
    <div className='App'>
      <h1>Country Loaded : {countries.length}</h1>

      <h1>Country added : {cart.length}</h1>

      <Cart cart={cart} />

      {countries.map((country) => (
        <Country
          handleClick={handleClick}
          key={country.alpha3Code}
          country={country}
        />
      ))}

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
