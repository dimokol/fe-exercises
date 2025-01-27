"use client";

import { useEffect, useState } from "react";

type Subreddit = {
    Rank: number;
    Name: string;
    Status: "up" | "down" | "normal";
    isOpen: boolean;
};

const SubredditList = () => {
    const [subreddits, setSubreddits] = useState<Subreddit[]>([]);

    // Fetch your data here using your GraphQL token
    useEffect(() => {
        async function fetchData() {
            try {
                const spreadsheetId = '1qabDI5lhZHa3v5kze5kC3fs23iTvPcV-Hhzhm78qGUY';
                const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': '6d6ee6cc334b2d6beecc8d75b0a1f61e11763378'
                    },
                    body: JSON.stringify({
                        query: `
                            {
                                get (limit: 20) {
                                    Rank
                                    Name
                                    Status
                                    isOpen
                                }
                            }
                        `
                    })
                });
                const data = await response.json();
                console.log(data);
                setSubreddits(data.data.get);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="bg-blue-100 p-4 rounded-lg shadow-md w-full max-w-xs">
            <h2 className="text-xl font-bold mb-2">Top News Communities</h2>
            <ul>
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.Rank}
                        className="flex justify-between items-center py-2"
                    >
                        <div className="flex items-center">
                            <span>{subreddit.Rank}</span>
                            {subreddit.Status !== "normal" && (
                                <span
                                    className={`ml-2 ${
                                        subreddit.Status === "up" ? "text-green-500" : "text-red-500"
                                    }`}
                                >
                                    {subreddit.Status === "up" ? "▲" : "▼"}
                                </span>
                            )}
                            <span className="ml-2">{subreddit.Name}</span>
                        </div>
                        {subreddit.isOpen && (
                            <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                Join
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <button className="mt-4 text-blue-600 underline">View All</button>
        </div>
    );
};

export default SubredditList;