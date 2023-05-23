import { StarshipList } from "@/components/StarshipList";
import getAllStarships from "@/service/getAllStarships";
import searchStarship from "@/service/searchStarship";
import { PageProps } from "@/types/PageProps";


export default async function Search({ searchParams }: PageProps) {
    const query = searchParams?.query;
    const starships = query ? await searchStarship(query) : await getAllStarships()
    if (!starships) throw new Error("Ships not found")
    return <StarshipList starships={starships} />
}