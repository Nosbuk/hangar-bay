"use client"

import { Film } from "@/types/Film"
import Dropdown, { Option } from "react-dropdown";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { usePathname, useRouter } from "next/navigation";
import { FilmLink } from "./FilmLink";

interface Props {
    films: Film[]
}

export const FilmLinks = ({ films }: Props) => {

    const router = useRouter()
    const pathname = usePathname()

    const allShipsOption = { label: "All Starships", value: "/" }
    const options = films.map((film) => ({ label: film.title, value: `/film/${film.episode_id}` }))

    const handleChange = (event: Option) => {
        router.push(event.value)
    }

    const currentValue = options.find(({ value }) => pathname.startsWith(value))
    options.unshift(allShipsOption)

    return (
        <>
            <Dropdown
                className="absolute top-0 right-0 w-full p-2 bg-black cursor-pointer sm:hidden"
                controlClassName="flex items-center justify-between gap-2"
                arrowClassName="pointer-events-none	"
                options={options}
                value={currentValue}
                onChange={handleChange}
                placeholder="Select a movie to filter ships"
                arrowClosed={<AiOutlineArrowDown size={20} className="pointer-events-none" />}
                arrowOpen={<AiOutlineArrowUp size={20} className="pointer-events-none" />}
            />
            <div className="flex-wrap items-center justify-center hidden gap-2 sm:flex">
                {
                    films.map(({ title, episode_id }) =>
                        <FilmLink key={episode_id} title={title} href={`/film/${episode_id}`} />
                    )
                }
            </div>
        </>
    )
}
