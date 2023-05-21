import getAllStarships from "@/service/getAllStarships";
import { store } from "@/store";


export async function generateStaticParams() {
    const starships = store.getState().search.starships

    return starships.map((ship, index) => { return { index } })
}

export default async function Ship({ params }: { params: { id: string } }) {
    const index = Number(params.id)
    const starship = store.getState().search.starships[index]

    return (
        <div className="w-full max-w-4xl">
            <h3 className="text-5xl">{starship?.name}</h3>
        </div>
    )
}