import { Film } from "@/types/Film";

export default async function getAllFilms(): Promise<Film[]> {
  try {
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();
    const { results } = data;
    return results.sort(
      (prev: Film, curr: Film) =>
        Number(prev.episode_id) - Number(curr.episode_id)
    );
  } catch (error: any) {
    if (error?.message) throw new Error(error);
    throw new Error("Unknown error");
  }
}
