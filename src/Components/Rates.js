const Rates = ({ exchangeRate }) => {
  const eur = Math.round(1 / exchangeRate.eur);
  const usd = Math.round(1 / exchangeRate.usd);
  return (
    <div>
      <p>Árfolyam</p>
      <p>EUR = {eur} HUF</p>
      <p>USD = {usd} HUF</p>
    </div>
  );
};

export default Rates;
