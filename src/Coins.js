import React, { useEffect, useState } from "react";
import Coin from "./coin";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

const Coins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [coins, setCoins] = useState([]);

  const getCoins = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setIsLoading(false);
      setCoins(data);
      // console.log(data);
    } else {
      setIsLoading(false);
      setIsError(true);
      throw new Error(`${response.status}`);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  if (isLoading) {
    return (
      <div className="full-page">
        <h1>Loading...</h1>
      </div>
    );
  } else if (isError) {
    return (
      <div className="full-page">
        <h1>Error...</h1>
      </div>
    );
  } else {
    return (
      <tbody>
        {coins.map((coin) => {
          return <Coin key={coin.id} {...coin} />;
        })}
      </tbody>
    );
  }
};

export default Coins;
