"use client";

import HouseCard from "./components/HouseCard";
import LoadingSpinner from "./components/LoadingSpinner";
import useHouses from "./hooks/useHouses";

export default function HarryPotterCardsPage() {
  const { houses, loading } = useHouses();

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {houses.map(house => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      )}
    </div>
  );
}