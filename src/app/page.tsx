"use client";

import React, { useEffect, useState } from 'react';
import SubredditCard from '../components/subredditCard';
import { fetchSubreddits } from '../lib/api';
import { Subreddit } from '../types';
import Image from 'next/image';

const HomePage = () => {
  const [subreddits, setSubreddits] = useState<Subreddit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSubreddits() {
      try {
        const subredditsData = await fetchSubreddits();
        setSubreddits(subredditsData);
      } catch (error) {
        setError("Failed to load subreddits");
      } finally {
        setLoading(false);
      }
    }

    loadSubreddits();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-blue-100 p-6 rounded-2xl shadow-md w-full max-w-md mx-auto relative">
      <div className="relative h-20 -my-6 -mx-6">
        <Image
          src="/background.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl opacity-50"
        />
        <h2 className="text-white text-xl font-bold relative z-10 p-4 pt-10">Top News Communities</h2>
      </div>
      <ul className="divide-y divide-gray-300 mt-6">
        {subreddits.map((subreddit) => (
          <SubredditCard
            key={subreddit.Rank}
            rank={subreddit.Rank}
            name={subreddit.Name}
            status={subreddit.Status}
            isOpen={subreddit.isOpen}
          />
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button className="bg-redditBlue text-white w-full py-2 rounded-full text-md">View All</button>
      </div>
  
      <div className="flex justify-between mt-4 text-blue-600">
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">Top</button>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">Near You</button>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">Sports</button>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">Aww</button>
      </div>
    </div>
  );
};

export default HomePage;