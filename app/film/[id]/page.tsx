import { StarshipList } from "@/components/StarshipList";
import getAllFilms from "@/service/getAllFilms";
import getAllStarships from "@/service/getAllStarships";

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.map((film, index) => ({ index }))
}

export default async function Film({ params }: { params: { id: string } }) {
    const index = Number(params.id)
    const films = await getAllFilms()
    const film = films[index]

    const starships = await getAllStarships()
    const filteredStarships = starships.filter((ship) => {
        return film.starships.includes(ship.url)
    }
    )
    return <StarshipList starships={filteredStarships} />
}