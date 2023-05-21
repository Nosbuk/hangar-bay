import { Starship } from "@/types/Starship";

export default async function getAllStarships(): Promise<Starship[]> {
  const res = await fetch("https://swapi.dev/api/starships/");
  const data = await res.json();
  return data.results;
}
