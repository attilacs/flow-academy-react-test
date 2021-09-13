import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ForintInput from './Components/ForintInput';
import Values from './Components/Values';

function App() {
  const [forint, setForint] = useState(0);
  const [exchangeRate, setExchangeRate] = useState({});

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate.host/latest?base=huf'
        );
        setExchangeRate({
          usd: response.data.rates.USD,
          eur: response.data.rates.EUR
        });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchExchange();
  }, []);

  return (
    <div className="App container">
      <div className="row">
        <h2>Deviza váltás</h2>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <ForintInput setForint={setForint} forint={forint} />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Values forint={forint} exchangeRate={exchangeRate} />
        </div>
      </div>
    </div>
  );
}

export default App;
