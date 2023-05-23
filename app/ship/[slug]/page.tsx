import getAllStarships from "@/service/getAllStarships";
import { PageProps } from "@/types/PageProps";
import { Starship } from "@/types/Starship";
import { creditConvert } from "@/utils/creditConvert";

export async function generateStaticParams() {
    const starships = await getAllStarships();

    return starships.map((ship) => ({ slug: ship.slug }))
}

export default async function Ship({ params }: PageProps) {
    const starships = await getAllStarships()
    const starship = starships.find((ship) => ship.slug === params?.slug)
    if (!starship) throw new Error("Ship not found")
    const keysToFilterOut = ["url", "name", "films", "created", "edited", "pilots", "slug", "manufacturer", "cost_in_credits"]

    if (starship) return (
        <article className="w-full sm:max-w-lg">
            <div className="flex flex-col items-center w-full gap-2">
                <h3 className="my-3 text-3xl font-bold sm:text-4xl">
                    {starship.name}
                </h3>
                <div>
                    by {starship.manufacturer}
                </div>
                <div className="text-2xl font-bold text-transparent sm:text-3xl w-fit bg-gradient-to-r from-blue-500 via-violet-500 to-red-700 bg-clip-text">
                    {starship.cost_in_credits != "unknown" && <>for only {creditConvert(starship.cost_in_credits)}</>}
                </div>
                {Object.keys(starship).map((key) => {
                    if (keysToFilterOut.includes(key)) return
                    return (
                        <div key={key} className="flex items-center justify-between w-full p-2 text-sm border-2 border-gray-800 rounded-none sm:rounded-lg border-x-0 sm:border-x-2 sm:max-w-lg sm:text-lg">
                            <p>{key.replaceAll("_", " ")}:</p>
                            <p>{starship[key as keyof Starship]}</p>
                        </div>
                    )
                }
                )}
            </div>
        </article>
    )
    if (!starship) return <p className="mt-6 text-xl text-center text-red-400">This hangar is empty!</p>
}