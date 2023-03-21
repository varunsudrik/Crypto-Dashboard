function ExchangeRate(props) {
  return (
    <div className="exchange-rate">
      <h3> Exchange Rate </h3>
      <h1>{props.rate}</h1>
      Conversion from {props.primaryCurrency} to {props.secondaryCurrency}
      <p></p>
    </div>
  );
}
export default ExchangeRate;
