import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [money, setMoney] = useState(0);
  const inputMoney = (event) => {
    setMoney(event.target.value);
  };
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input type="number" onChange={inputMoney} />
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((item) => (
            <option key={item.id}>
              {item.name} ({item.symbol}) : {item.quotes["USD"].price} you can
              buy coin : {money / item.quotes["USD"].price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
