import { Starship } from "@/types/Starship";
import slugify from "slugify";

export default async function getAllStarshipPages(
  pageKey = 1,
  allStarships?: Starship[][]
): Promise<Starship[][]> {
  try {
    const starships = allStarships || [];
    const fetchURL = `https://swapi.dev/api/starships/?page=${pageKey}`;
    const response = await fetch(fetchURL);
    const data = await response.json();
    starships.push(
      data.results.map((ship: Starship) =>
        ship.slug
          ? ship
          : { ...ship, slug: slugify(ship.name, { lower: true }) }
      )
    );

    if (data.next) {
      pageKey++;
      return await getAllStarshipPages(pageKey, starships);
    }
    return starships;
  } catch (error: any) {
    if (error?.message) throw new Error(error);
    throw new Error("Unknown error");
  }
}
