import React, { useEffect, useState } from "react";
import {
  type TokenInformation,
  type CryptocurrencyData,
} from "@/types/coinGeckoTypes";
import Image from "next/image";
import solanaIcon from "../../../../public/icons/solana-logo.svg";

const SolanaPriceInfo = () => {
  const [solanaPrice, setSolanaPrice] = useState<TokenInformation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/token-prices/coinGeckoPrices");
        if (!res.ok) {
          throw new Error(
            `Failed to fetch: ${res.status} - ${await res.text()}`,
          );
        }
        const data: CryptocurrencyData =
          (await res.json()) as CryptocurrencyData;
        setSolanaPrice(data.solana); // Directly setting Solana's TokenInformation
      } catch (error: unknown) {
        console.error("Failed to fetch data:", error);
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };

    fetchData().catch((error) => {
      console.error("Failed to execute fetchData:", error);
    });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mb-7 flex flex-col items-center justify-center rounded-lg bg-[#242424] p-4 shadow-lg">
      <div className="mb-4">
        <Image src="/solana-logo.svg" alt="Solana" width={50} height={50} />
      </div>
      <h1 className="text-lg font-medium text-white">Solana</h1>
      {solanaPrice ? (
        <>
          <p className="text-sm text-white/80">USD Price: ${solanaPrice.usd}</p>
          <p className="text-sm text-white/80">
            24h Change: {solanaPrice.usd_24h_change.toFixed(2)}%
          </p>
          <p className="text-sm text-white/80">
            Last Updated:{" "}
            {new Date(solanaPrice.last_updated_at * 1000).toLocaleString()}
          </p>
        </>
      ) : (
        <p className="text-sm text-white/80">Loading...</p>
      )}
    </div>
  );
};

export default SolanaPriceInfo;
