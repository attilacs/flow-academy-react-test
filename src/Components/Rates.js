const Rates = ({ exchangeRate }) => {
  const eur = Math.round(1 / exchangeRate.eur);
  const usd = Math.round(1 / exchangeRate.usd);
  return (
    <div>
      <p>Árfolyam</p>
      <p className={`${eur < 300 ? 'green' : 'red'}`}>EUR = {eur} HUF</p>
      <p className={`${usd < 300 ? 'green' : 'red'}`}>USD = {usd} HUF</p>
    </div>
  );
};

export default Rates;
