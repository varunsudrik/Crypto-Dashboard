function ExchangeRate(props) {
  return (
    <div className="exchange-rate">
      <h3> Exchange Rate </h3>
      Conversion from {props.primaryCurrency} to {props.secondaryCurrency}
      <h1>{props.rate}</h1>
      <p></p>
    </div>
  );
}
export default ExchangeRate;
