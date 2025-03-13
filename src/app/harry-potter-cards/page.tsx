"use client";

import HouseCard from "./components/HouseCard";
import LoadingSpinner from "./components/LoadingSpinner";
import useHouses from "./hooks/useHouses";

export default function HarryPotterCardsPage() {
  const { houses, loading } = useHouses();

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex justify-center flex-col space-y-4">
          {houses.map(house => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      )}
    </div>
  );
}