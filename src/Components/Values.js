const Values = ({ forint, exchangeRate }) => {
  return (
    <div className="d-flex flex-column">
      <h3>
        {forint} HUF = {exchangeRate.eur} EUR
      </h3>
      <h3>usd</h3>
    </div>
  );
};

export default Values;
