import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { type ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

interface CoinGeckoResponse {
  prices: [number, number][];
}

const Market = () => {
  const [chartData, setChartData] = useState<ChartData<
    "line",
    number[],
    unknown
  > | null>(null);
  const fetchData = async () => {
    const result = await axios.get<CoinGeckoResponse>(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30",
    );
    const labels = result.data.prices.map((price) =>
      new Date(price[0]).toLocaleDateString(),
    );
    const data = result.data.prices.map((price) => price[1]);
    setChartData({
      labels,
      datasets: [
        {
          label: "Bitcoin Price",
          data,
          fill: false,
          backgroundColor: "purple",
          borderColor: "purple",
        },
      ],
    });
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return <div>{chartData ? <Line data={chartData} /> : "Loading..."}</div>;
};

export default Market;
