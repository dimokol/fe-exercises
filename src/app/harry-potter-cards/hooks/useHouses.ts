"use client";

import { useEffect, useState } from 'react';
import { House } from '../types';

const API_URL = 'https://wizard-world-api.herokuapp.com/houses';

export default function useHouses() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }
        const data = await response.json();
        setHouses(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  return { houses, loading, error };
}