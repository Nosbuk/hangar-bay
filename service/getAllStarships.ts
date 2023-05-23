import { Starship } from "@/types/Starship";
import getAllStarshipPages from "./getAllStarshipPages";

export default async function getAllStarships(): Promise<Starship[]> {
  return (await getAllStarshipPages()).flat();
}
