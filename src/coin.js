import React from "react";
import { useNavigate } from "react-router-dom";

const Coin = ({
  id,
  symbol,
  name,
  image,
  current_price,
  market_cap_rank,
  price_change_percentage_24h,
  total_volume,
  market_cap,
}) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const navigate = useNavigate();

  return (
    <tr
      className="coin-row"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      <td>
        <p>{market_cap_rank}</p>
      </td>
      <td>
        <div className="logo">
          <img alt={symbol} src={image} />
          <div className="logo-detail">
            <p className="curr">{symbol.toUpperCase()}</p>
            <p className="name">{name}</p>
          </div>
        </div>
      </td>
      <td>
        <p>${numberWithCommas(current_price)}</p>
      </td>
      <td className="mobile-hide2">
        <p>{price_change_percentage_24h.toFixed(2)}%</p>
      </td>
      <td className="mobile-hide">
        <p>${numberWithCommas(total_volume)}</p>
      </td>
      <td className="mobile-hide">
        <p>${numberWithCommas(market_cap)}</p>
      </td>
    </tr>
  );
};

export default Coin;
