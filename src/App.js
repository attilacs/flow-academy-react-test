import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ForintInput from './Components/ForintInput';

function App() {
  const [exchangeRate, setExchangeRate] = useState({});
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate.host/latest?base=huf'
        );
        setExchangeRate({
          usd: response.data.rates.usd,
          eur: response.data.rates.eur
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchExchange();
  }, []);
  return (
    <div className="App container">
      <h2>Deviza váltás</h2>
      <ForintInput />
    </div>
  );
}

export default App;
