import { StarshipList } from "@/components/StarshipList";
import getAllFilms from "@/service/getAllFilms";
import { store } from "@/store";

export async function getStaticParams() {
    const films = await getAllFilms()

    return films.map((film, index) => ({ index }))
}

export default async function Film({ params }: { params: { id: string } }) {
    const index = Number(params.id)
    const film = (await getAllFilms())[index]
    const starships = store.getState().search.starships
    const filteredStarships = starships.filter((ship) => {
        return film.starships.includes(ship.url)
    }
    )
    return <StarshipList starships={filteredStarships} />
}