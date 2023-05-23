import { Starship } from "@/types/Starship";
import { creditConvert } from "@/utils/creditConvert";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs"

interface Props {
    starships: Starship[],
}

export const StarshipList = ({ starships }: Props) => {

    if (starships.length === 0) throw new Error("Ships not found")

    return (
        <article className="flex flex-col items-center w-full mt-2">
            {
                starships.map((ship) =>
                    <section key={ship.url} className="flex items-center justify-center w-full">
                        <Link href={`/ship/${ship.slug}`} className="flex items-center justify-between w-full p-3 my-2 text-sm bg-gray-900 rounded-none sm:max-w-xl sm:rounded-lg sm:text-lg hover:bg-gray-800">
                            <h3 className="mr-auto">
                                {ship.name}
                            </h3>
                            <p>
                                {creditConvert(ship.cost_in_credits)}
                            </p>
                            <BsFillArrowRightCircleFill className="ml-4" />
                        </Link>
                    </section>
                )
            }
        </article>
    )
}