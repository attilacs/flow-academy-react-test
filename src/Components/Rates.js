const Rates = ({ exchangeRate }) => {
  const eur = Math.round(1 / exchangeRate.eur);
  const usd = Math.round(1 / exchangeRate.usd);
  return (
    <div>
      <h6>Árfolyam</h6>
      <p className={`m-0 ${eur < 300 ? 'green' : 'red'}`}>EUR = {eur} HUF</p>
      <p className={`m-0 ${usd < 300 ? 'green' : 'red'}`}>USD = {usd} HUF</p>
    </div>
  );
};

export default Rates;
