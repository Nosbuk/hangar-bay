import { Film } from "@/types/Film";
import slugify from "slugify";

export default async function getAllFilms(): Promise<Film[]> {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  const { results } = data;
  return results.sort(
    (prev: Film, curr: Film) =>
      Number(prev.episode_id) - Number(curr.episode_id)
  );
}
