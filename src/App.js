import "./App.css";
import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import ExchangeRate from "./components/ExchangeRate";

function App() {
  return (
    <div className="app">
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
}

export default App;
