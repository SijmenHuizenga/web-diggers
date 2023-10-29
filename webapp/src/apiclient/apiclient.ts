import { Piece } from "./model";

export async function loadData(): Promise<Piece[]> {
  const jsonurl = import.meta.env.VITE_WEBDIGGER_API || "http://localhost:8080/json";
  const response = await fetch(jsonurl);
  return (await response.json()) as Piece[];
}
