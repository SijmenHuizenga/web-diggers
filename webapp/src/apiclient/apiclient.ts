import { Piece } from "./model";

export async function loadData(): Promise<Piece[]> {
  const response = await fetch("http://localhost:4000/test");
  return (await response.json()) as Piece[];
}

export async function loadMockData(): Promise<Piece[]> {
  return [
    {
      id: "1",
      name: "Helvetica",
      context:
        "Helvetica, also known by its original name Neue Haas Grotesk, is a widely",
      year: 1957,
      show: true,
      screenshot: "",
      embed: "Embed",
      updated: "today",
    },
    {
      id: "1",
      name: "Magic",
      context:
        "Helvetica, also known by its original name Neue Haas Grotesk, is a widely",
      year: 1957,
      show: true,
      screenshot: "",
      embed: "Embed",
      updated: "today",
    },
  ];
}
