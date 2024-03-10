import { useEffect, useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/utils/imageLoader";
import { formatCurrency } from "@/utils/formatCurrency";
import { lamportsToUSD } from "@/utils/lamportsToSol";
import { type Collection, type ApiResponse } from "@/types/magicEdenTypes";

const MagicEdenTable = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch("/api/magic-eden/magicEdenCollections");
        if (!res.ok) {
          const message = await res.text();
          throw new Error(`Failed to fetch: ${res.status} - ${message}`);
        }
        const data: ApiResponse = (await res.json()) as ApiResponse;
        console.log(
          "Data received from /api/magic-eden/magicEdenCollections:",
          data,
        );
        if (data?.collections) {
          const updatedCollections = data.collections.map((collection) => ({
            ...collection,
            floorPrice: lamportsToUSD(collection.floorPrice, 144), // HARDCODED NEED TO DYNAMICALLY FETCH SOLANA PRICE
          }));
          setCollections(updatedCollections.slice(0, 10));
        } else {
          setError("No collections data available");
        }
      } catch (error: unknown) {
        console.error("Failed to fetch data:", error);
        setError(error instanceof Error ? error.message : String(error));
      }
    };

    void fetchData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-white">
        <thead className="overflow-hidden border border-[#e6e6e6]/5 bg-[#242424] py-2 lg:rounded-t-3xl">
          <tr>
            <th scope="col" className="px-6 py-3">
              Rank
            </th>
            <th scope="col" className="px-6 py-3">
              Logo
            </th>
            <th scope="col" className="px-6 py-3">
              Project Name
            </th>
            <th scope="col" className="px-6 py-3">
              Floor Price
            </th>
            <th scope="col" className="px-6 py-3">
              Volume
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Combined `symbol` with array index to ensure unique keys for each element, addressing non-unique `symbol` values in the dataset. */}
          {collections?.map((collection, index) => (
            <tr
              key={`${collection.symbol}-${index}`}
              className="overflow-hidden border border-[#e6e6e6]/5 bg-[#242424] py-2 lg:rounded-t-3xl"
            >
              <td className="px-6 py-4">{collection.description}</td>
              <td className="px-6 py-4">
                <Image
                  loader={imageLoader}
                  src={collection.image}
                  alt={`${collection.name} Image`}
                  width={50}
                  height={50}
                  className="rounded-full"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </td>
              <td className="px-6 py-4">{collection.name}</td>
              <td className="px-6 py-4">
                {formatCurrency(collection.floorPrice, true)}
              </td>
              <td className="px-6 py-4">
                {formatCurrency(collection.volumeAll)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MagicEdenTable;
