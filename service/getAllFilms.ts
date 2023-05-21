import { Film } from "@/types/Film";

export default async function getAllFilms(): Promise<Film[]> {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  return data.results;
}
