export type Piece = {
  id: string;
  name: string;
  context: string;
  year: number;
  show: boolean;
  screenshot: string;
  embed: "Embed" | "Source" | "Fun" | "Nostalgia" | "Trending";
  updated: string;
};
