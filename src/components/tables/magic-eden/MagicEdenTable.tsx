import { useEffect, useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/utils/imageLoader";
import { formatCurrency } from "@/utils/formatCurrency";
import { lamportsToSOL } from "@/utils/lamportsToSol";

type Collection = {
  symbol: string;
  name: string;
  description: string;
  image: string;
  floorPrice: number;
  volumeAll: number;
};

type ApiResponse = {
  collections: Collection[];
};

const MagicEdenTable = () => {
  const [collections, setCollections] = useState<Collection[]>([]); // Ensures initial state is an array
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/nfts/collections");
        if (!res.ok) {
          const message = await res.text(); // Gets the error message text from the response
          throw new Error(`Failed to fetch: ${res.status} - ${message}`);
        }
        const data: ApiResponse = (await res.json()) as ApiResponse;
        console.log("Data received from /api/nfts/collections:", data); // Log the data for debugging
        if (data?.collections) {
          const updatedCollections = data.collections.map((collection) => ({
            ...collection,
            floorPrice: lamportsToSOL(collection.floorPrice),
          }));
          setCollections(updatedCollections.slice(0, 10)); // Take only the top 10 collections
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
          {collections?.map(
            (
              collection, // Using optional chaining for safety
            ) => (
              <tr
                key={collection.symbol}
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
                <td className="px-6 py-4">{collection.volumeAll}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MagicEdenTable;
