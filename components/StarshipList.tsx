import { Starship } from "@/types/Starship";
import { creditConvert } from "@/utils/creditConvert";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs"

interface Props {
    starships: Starship[]
}

export const StarshipList = ({ starships }: Props) => {
    return (
        <div className="w-full">
            {starships.map((ship, index) =>
                <div key={ship.url} className="flex items-center justify-between p-3 m-5 text-2xl bg-gray-900 border border-gray-700 rounded-lg">
                    <h3 className="mr-auto text-2xl">
                        {ship.name}
                    </h3>
                    <p>
                        {creditConvert(ship.cost_in_credits)}
                    </p>
                    <Link href={`/ship/${index}`} className="ml-4">
                        <BsFillArrowRightCircleFill />
                    </Link>
                </div>)
            }
        </div>
    )
}