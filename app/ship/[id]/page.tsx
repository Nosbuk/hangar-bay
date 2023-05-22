import getAllStarships from "@/service/getAllStarships";
import { Starship } from "@/types/Starship";

export async function generateStaticParams() {
    const starships = await getAllStarships();

    return starships.map((ship, index) => ({ index }))
}

export default async function Ship({ params }: { params: { id: string } }) {
    const index = Number(params.id)
    const starships = await getAllStarships()
    const starship = starships[index]
    const keysToFilter = ["url", "name", "films", "created", "edited", "pilots"]

    return (
        <div className="w-full max-w-4xl">
            <div className="flex flex-col w-full gap-2">
                <h3 className="my-3 text-4xl font-bold">{starship.name}</h3>
                {Object.keys(starship).map((key, index) => {
                    if (keysToFilter.includes(key)) return
                    return (
                        <div className="flex items-center justify-between w-full max-w-md p-2 border-2 border-gray-800 rounded-lg">
                            <p>{key.replaceAll("_", " ")}:</p>
                            <p>{Object.values(starship)[index]}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}