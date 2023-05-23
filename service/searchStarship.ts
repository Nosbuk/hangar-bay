import { Starship } from "@/types/Starship";
import slugify from "slugify";

export default async function searchStarship(
  query: string
): Promise<Starship[]> {
  const res = await fetch("https://swapi.dev/api/starships/?search=" + query, {
    cache: "no-store",
  });
  const data = await res.json();
  const { results } = data;
  return results.map((ship: Starship) =>
    ship.slug ? ship : { ...ship, slug: slugify(ship.name) }
  );
}
