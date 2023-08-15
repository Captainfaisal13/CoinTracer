"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const makeFirstLetterLowerCase = (text: string) => {
  return (text = text.charAt(0).toLowerCase() + text.slice(1));
};
const CoinItem = ({ params }: { params: { coin: string } }) => {
  const [coin, setCoin] = useState<any>();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params.coin}`
      );
      const data = await res.json();
      setCoin(data);
      // console.log(
      //   "got data",
      //   `https://api.coingecko.com/api/v3/coins/${params.coin}`,
      //   data,
      //   params.coin
      // );
    })();
  }, []);
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (!coin)
    return (
      <div className="w-full min-h-screen flex justify-center align-middle">
        <h1 className="self-center text-xl md:text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  return (
    <div className="max-w-3xl m-auto px-1 sm:p-0">
      <div
        style={{
          boxShadow: "0 0 12px #18191b",
          // transform: "scale(1.03)",
        }}
        className="rounded-md flex flex-col my-4 mx-auto py-2 sm:py-5 px-4 text-center text-2xl md:text-4xl font-bold"
      >
        <h1>{coin.name}</h1>
      </div>
      <div
        style={{
          boxShadow: "0 0 12px #18191b",
          // transform: "scale(1.03)",
        }}
        className="rounded-md flex flex-col justify-between my-4 mx-auto py-4 px-4 text-center text-2xl gap-4"
      >
        <div className="flex justify-start">
          <div
            style={{
              boxShadow: "0 0 12px #6900ff",
              // transform: "scale(1.03)",
            }}
            className="bg-[#6900ff] border border-solid border-[#6900ff] text-base leading-4 rounded-md inline p-1"
          >
            Rank # {coin.market_cap_rank}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image
              src={coin.image.small}
              width={40}
              height={38}
              alt={coin.symbol}
            />
            <div className="m-auto flex flex-col gap-1">
              <p className="text-left text-lg leading-3 font-bold mt-1">
                {coin.symbol.toUpperCase()}
              </p>
              <p
                style={{ fontSize: "10px" }}
                className="text-left leading-3 tracking-wide"
              >
                {coin.name}
              </p>
            </div>
          </div>
          <div className="flex ">
            {/* <p className="my-auto text-lg">{coin.symbol.toUpperCase()}~</p> */}
            <p className="my-auto text-3xl font-bold">
              ${numberWithCommas(coin.market_data.current_price.usd)}/-
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "0 0 12px #18191b",
          // transform: "scale(1.03)",
        }}
        className="rounded-md flex flex-col justify-between my-4 mx-auto py-4 px-4 text-center text-2xl gap-4"
      >
        <table className="text-base border-separate border-spacing-1">
          <thead>
            <tr>
              <th className="bg-[#333] sm:p-2 font-bold">1h</th>
              <th className="bg-[#333] sm:p-2 font-bold">24h</th>
              <th className="bg-[#333] sm:p-2 font-bold">7d</th>
              <th className="bg-[#333] sm:p-2 font-bold">14d</th>
              <th className="bg-[#333] sm:p-2 font-bold">30d</th>
              <th className="bg-[#333] sm:p-2 font-bold">1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:p-3">
                {coin.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(
                  1
                )}
                %
              </td>
              <td className="sm:p-3">
                {coin.market_data.price_change_percentage_24h.toFixed(1)}%
              </td>
              <td className="sm:p-3">
                {coin.market_data.price_change_percentage_7d.toFixed(1)}%
              </td>
              <td className="sm:p-3">
                {coin.market_data.price_change_percentage_14d.toFixed(1)}%
              </td>
              <td className="sm:p-3">
                {coin.market_data.price_change_percentage_30d.toFixed(1)}%
              </td>
              <td className="sm:p-3">
                {coin.market_data.price_change_percentage_1y.toFixed(1)}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          boxShadow: "0 0 12px #18191b",
          // transform: "scale(1.03)",
        }}
        className="rounded-md flex flex-col sm:flex-row justify-between my-4 mx-auto py-4 px-4 text-center text-base gap-2 sm:gap-8"
      >
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex justify-between border-b border-solid border-b-gray-500 pb-2">
            <p className="font-bold">24 Hour Low</p>
            <p>${numberWithCommas(coin.market_data.low_24h.usd)}</p>
          </div>
          <div className="flex justify-between border-b border-solid border-b-gray-500 pb-2">
            <p className="font-bold">24 Hour High</p>
            <p>${numberWithCommas(coin.market_data.high_24h.usd)}</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex justify-between border-b border-solid border-b-gray-500 pb-2">
            <p className="font-bold">Market Cap</p>
            <p>${numberWithCommas(coin.market_data.market_cap.usd)}</p>
          </div>
          <div className="flex justify-between border-b border-solid border-b-gray-500 pb-2">
            <p className="font-bold">Circulating Suppy</p>
            <p>${numberWithCommas(coin.market_data.circulating_supply)}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "0 0 12px #18191b",
          // transform: "scale(1.03)",
        }}
        className="rounded-md flex flex-col justify-between my-4 mx-auto py-4 px-4 text-left text-base"
      >
        <h3 className="mb-4 font-bold text-lg">About</h3>
        <p
          dangerouslySetInnerHTML={{ __html: coin.description.en }}
          className="text-white"
        />
      </div>
    </div>
  );
};

export default CoinItem;
