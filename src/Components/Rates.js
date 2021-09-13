const Rates = ({ exchangeRate }) => {
  return (
    <div>
      <p>Árfolyam</p>
      <p>EUR = {Math.round(1 / exchangeRate.eur)} HUF</p>
      <p>USD = {Math.round(1 / exchangeRate.usd)} HUF</p>
    </div>
  );
};

export default Rates;
