import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const url = `https://api.coingecko.com/api/v3/coins/${params.coin}`;
  const response = await fetch(url);
  let data;
  if (response.status >= 200 && response.status <= 299) {
    data = await response.json();
  } else {
    throw new Error(`${response.status}`);
  }
  return { coin: data };
}

const CoinItem = ({ isDarkMode }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const currentCoin = useLoaderData();
  let coin = currentCoin?.coin;
  console.log("got coin", coin, isDarkMode);
  if (!coin) return;
  return (
    <main className={`coin-item-main`}>
      <div className="content light-noshadow">
        <h1 className="heading">{coin.name}</h1>
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            className="rank"
            style={{ marginBottom: "1.6rem", width: "5rem" }}
          >
            Rank # {coin.market_cap_rank}
          </div>
          <div
            className=""
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <img src={coin.image.small} alt={coin.symbol} />
            <div className="" style={{ margin: "auto" }}>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {coin.symbol.toUpperCase()}
              </p>
              <p style={{ textAlign: "left", fontSize: "12px" }}>
                {" "}
                {coin.name}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            paddingBottom: ".48rem",
            gap: ".5rem",
          }}
        >
          <p style={{ marginTop: "auto" }}>1{coin.symbol.toUpperCase()}:</p>
          <h2>${numberWithCommas(coin.market_data.current_price.usd)}</h2>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr className="coin-item-heading">
              <th>1h</th>
              <th>24h</th>
              <th className="mobile-hide2-coin-item">7d</th>
              <th className="mobile-hide2-coin-item">14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {coin.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(
                  1
                )}
                %
              </td>
              <td>
                {coin.market_data.price_change_percentage_24h.toFixed(1)}%
              </td>
              <td className="mobile-hide2-coin-item ">
                {coin.market_data.price_change_percentage_7d.toFixed(1)}%
              </td>
              <td className="mobile-hide2-coin-item ">
                {coin.market_data.price_change_percentage_14d.toFixed(1)}%
              </td>
              <td>
                {coin.market_data.price_change_percentage_30d.toFixed(1)}%
              </td>
              <td>{coin.market_data.price_change_percentage_1y.toFixed(1)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="content-stats">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            gap: ".5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid grey",
              flex: "1",
              paddingBottom: ".4rem",
            }}
          >
            <p style={{ fontWeight: "bold" }}>24 Hour Low</p>
            <p>${numberWithCommas(coin.market_data.low_24h.usd)}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid grey",
              flex: "1",
              paddingBottom: ".4rem",
            }}
          >
            <p style={{ fontWeight: "bold" }}>24 Hour High</p>
            <p>${numberWithCommas(coin.market_data.high_24h.usd)}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            gap: ".5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid grey",
              flex: "1",
              paddingBottom: ".4rem",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Market Cap</p>
            <p>${numberWithCommas(coin.market_data.market_cap.usd)}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid grey",
              flex: "1",
              paddingBottom: ".4rem",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Circulating Suppy</p>
            <p>${numberWithCommas(coin.market_data.circulating_supply)}</p>
          </div>
        </div>
      </div>
      <div className="content" style={{ textAlign: "left" }}>
        <h3 style={{ marginBottom: "1rem" }}>About</h3>
        <p
          dangerouslySetInnerHTML={{ __html: coin.description.en }}
          className="description"
        />
      </div>
    </main>
  );
};

export default CoinItem;
