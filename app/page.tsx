"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function Home() {
  const router = useRouter();
  const [coins, setCoins] = useState<any>();
  useEffect(() => {
    if (!coins) {
      (async () => {
        console.log("fetching");

        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
        );
        const data = await res.json();
        setCoins(data);
        // console.log(
        //   "got data",
        //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`,
        //   data,
        //   params.coin
        // );
      })();
    }
  }, []);
  if (!coins)
    return (
      <div className="w-full min-h-screen flex justify-center align-middle">
        <h1 className="self-center text-xl md:text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  return (
    <div className="my-auto mx-3">
      <table
        style={{ borderSpacing: "0 2.3rem" }}
        className="text-base w-full text-center font-normal border-separate border-spacing-10"
      >
        <thead className="">
          <tr className="outline outline-1 dark:outline-none dark:shadow-3xl">
            <th className="p-2 font-bold">
              <p>#</p>
            </th>
            <th className="p-2 font-bold">
              <p>Coin</p>
            </th>
            <th className="p-2 font-bold">
              <p>Price</p>
            </th>
            <th className="p-2 font-bold hidden sm:table-cell">
              <p>24h</p>
            </th>
            <th className="p-2 font-bold hidden md:table-cell">
              <p>Volume</p>
            </th>
            <th className="p-2 font-bold hidden md:table-cell">
              <p>Mkt Cap</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin: any) => {
            return (
              <tr
                key={coin.id}
                style={{
                  transition: "transform 0.2s ease-out",
                  // transform: "scale(1.03)",
                }}
                className="mt-6 cursor-pointer outline outline-1 dark:outline-none dark:shadow-3xl hover:scale-105"
                onClick={() => router.push(`/${coin.id}`)}
              >
                <td className="p-4">
                  <p>{coin.market_cap_rank}</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-row justify-center text-left">
                    <Image
                      className="mr-2"
                      src={coin.image}
                      height={20}
                      width={40}
                      alt="market-logo"
                    />
                    <div className="flex flex-col justify-center gap-1 pt-1">
                      <p className="leading-3">{coin.symbol.toUpperCase()}</p>
                      <p
                        style={{ fontSize: "10px" }}
                        className="font-light leading-3"
                      >
                        {coin.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p>${numberWithCommas(coin.current_price)}</p>
                </td>
                <td className="p-4 hidden sm:table-cell">
                  <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p>${numberWithCommas(coin.total_volume)}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p>${numberWithCommas(coin.market_cap)}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
