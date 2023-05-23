import { Starship } from "@/types/Starship";
import getAllStarshipPages from "./getAllStarshipPages";

export default async function getAllStarships(): Promise<Starship[]> {
  try {
    return (await getAllStarshipPages()).flat();
  } catch (error: any) {
    if (error?.message) throw new Error(error);
    throw new Error("Unknown error");
  }
}
