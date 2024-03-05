import { useEffect, useState } from "react";
import Image from "next/image";

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

// Constants
const LAMPORTS_PER_SOL = 1000000000; // 1 SOL = 1,000,000,000 lamports

// Function to convert lamports to SOL
function lamportsToSOL(lamports: number) {
  return lamports / LAMPORTS_PER_SOL;
}

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
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Project Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Floor Price
            </th>
            <th scope="col" className="px-6 py-3">
              Volume
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {collections?.map(
            (
              collection, // Using optional chaining for safety
            ) => (
              <tr key={collection.symbol} className="border-b bg-white">
                <td className="px-6 py-4">{collection.name}</td>
                <td className="px-6 py-4">{collection.description}</td>
                <td className="px-6 py-4">{collection.floorPrice}</td>
                <td className="px-6 py-4">{collection.volumeAll}</td>
                <td className="px-6 py-4">
                  <Image
                    src={"solana-logo.svg"}
                    alt={`${collection.name} Image`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MagicEdenTable;
