export type Subreddit = {
    Rank: number;
    Name: string;
    Status: "up" | "down" | "normal";
    isOpen: boolean;
  };