const Values = ({ forint, exchangeRate }) => {
  return (
    <div className="d-flex flex-column">
      <h3>
        {forint} HUF = {Math.round(forint * exchangeRate.eur * 100) / 100} EUR
      </h3>
      <h3>
        {forint} HUF = {Math.round(forint * exchangeRate.usd * 100) / 100} USD
      </h3>
    </div>
  );
};

export default Values;
