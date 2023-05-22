import getAllStarships from "@/service/getAllStarships";
import { Starship } from "@/types/Starship";
import { creditConvert } from "@/utils/creditConvert";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs"

interface Props {
    starships: Starship[]
}

export const StarshipList = async ({ starships }: Props) => {
    const allStarships = await getAllStarships();

    return (
        <div className="w-full">
            {
                starships.map((ship) =>
                    <div key={ship.url} className="flex items-center justify-between p-3 m-5 text-2xl bg-gray-900 border border-gray-700 rounded-lg">
                        <h3 className="mr-auto text-2xl">
                            {ship.name}
                        </h3>
                        <p>
                            {creditConvert(ship.cost_in_credits)}
                        </p>
                        <Link href={`/ship/${allStarships.findIndex((element) => element.name === ship.name)}`} className="ml-4">
                            <BsFillArrowRightCircleFill />
                        </Link>
                    </div>
                )
            }
            {
                starships.length === 0 && <p className="mt-6 text-xl text-center text-red-400">This hangar is empty!</p>
            }
        </div>
    )
}