import { StarshipList } from "@/components/StarshipList";
import getAllFilms from "@/service/getAllFilms";
import getAllStarships from "@/service/getAllStarships";
import { PageProps } from "@/types/PageProps";

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.map((film) => ({ id: film.episode_id.toString() }))
}

export default async function Film({ params }: PageProps) {
    const films = await getAllFilms()
    const film = films.find((film) => film.episode_id.toString() === params?.id)
    if (!film) throw new Error("Film not found")
    const starships = await getAllStarships()
    const filteredStarships = starships.filter((ship) => {
        return film.starships.includes(ship.url)
    }
    )
    return <StarshipList starships={filteredStarships} />
}