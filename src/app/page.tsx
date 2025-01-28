"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Component Library</h1>
      <h3 className="text-xl font-bold mb-6">FE Exercises</h3>
      
      <div className="flex justify-between space-x-4">
        <Link href="/library-search">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
            Library Search
          </button>
        </Link>
        
        <Link href="/reddit-components">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
            Reddit Components
          </button>
        </Link>
        
        <Link href="/shipping-components">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
            Shipping Components
          </button>
        </Link>
        
        <Link href="/harry-potter-cards">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
            Harry Potter Cards
          </button>
        </Link>
      </div>
    </div>
  );
}