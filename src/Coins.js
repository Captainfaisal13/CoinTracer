import React, { useEffect, useState } from "react";
import Coin from "./coin";

const Coins = ({ isLoading, isError, coins }) => {
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
      <div className="table-container">
        <table className="table">
          <thead className="table-heading-row">
            <tr className="coin-heading-row">
              <th>
                <p>#</p>
              </th>
              <th>
                <p>Coin</p>
              </th>
              <th>
                <p>Price</p>
              </th>
              <th className="mobile-hide2">
                <p>24h</p>
              </th>
              <th className="mobile-hide">
                <p>Volume</p>
              </th>
              <th className="mobile-hide">
                <p>Mkt Cap</p>
              </th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin) => {
              return <Coin key={coin.id} {...coin} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Coins;
