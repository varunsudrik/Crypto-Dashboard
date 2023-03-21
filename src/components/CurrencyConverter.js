import ExchangeRate from "./ExchangeRate";
import { useEffect, useState } from "react";
import axios from "axios";

function CurrencyConverter() {
  const currencies = ["BTC", "USD", "LTC", "XRP", "ETH"];
  const [currency, setCurrency] = useState("BTC");
  const [currency_sec, setCurrency_sec] = useState("BTC");
  var [exchangerate, setExchangeRate] = useState(0);
  var [result, setResult] = useState(0);

  const [value, setValue] = useState(1);
  const [value_sec, setValue_sec] = useState();

  function primary_value(event) {
    setValue(event.target.value);
    console.log(value);
  }
  function secondary_value(event) {
    setValue_sec(event.target.value);
  }

  function primary_state(event) {
    setCurrency(event.target.value);
    console.log(currency);
  }

  function secondary_state(event) {
    setCurrency_sec(event.target.value);
  }

  function convert() {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: currency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: currency_sec,
      },
      headers: {
        "X-RapidAPI-Key": "4937bb121bmsh7609e948e1a4bacp133fdejsn9d1c8ce15bc9",
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        // console.log(
        //   response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        // );
        console.log(exchangerate);
        console.log(parseInt(exchangerate) * parseInt(value));
        setResult(parseInt(exchangerate) * parseInt(value));
      })
      .catch(function (error) {
        console.error("error");
      });
  }

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>

      <table>
        <tbody>
          <tr>
            <td>
              <h2>Primary Currency</h2>
            </td>
            <td>
              <input type="number" onBlur={primary_value}></input>
            </td>
            <td>
              <select onChange={primary_state}>
                {currencies.map((e) => (
                  <option> {e} </option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <h2>Secondary Currency</h2>
            </td>
            <td>
              <input type="number" disabled="true" value={result}></input>
            </td>
            <td>
              <select onChange={secondary_state}>
                {currencies.map((e) => (
                  <option> {e} </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="convert-button" onClick={convert}>
        Submit
      </button>

      <div>
        <ExchangeRate />
      </div>
    </div>
  );
}
export default CurrencyConverter;
