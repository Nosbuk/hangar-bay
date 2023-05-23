import { StarshipList } from "@/components/StarshipList";
import getAllStarships from "@/service/getAllStarships";

export default async function Home() {

  const starships = await getAllStarships()

  if (!starships) throw new Error("Starships list not found")

  return (
    <StarshipList starships={starships} />
  )
}