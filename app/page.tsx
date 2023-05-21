import { StarshipList } from "@/components/StarshipList";
import { store } from "@/store";

export default async function Home() {
  const starships = store.getState().search.starships
  return (
    <StarshipList starships={starships} />
  )
}