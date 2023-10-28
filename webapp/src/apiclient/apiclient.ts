import { Piece } from "./model";

export async function loadData(): Promise<Piece[]> {
  const response = await fetch("http://localhost:8080/json");
  return (await response.json()) as Piece[];
}
