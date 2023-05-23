"use client"

import Dropdown from "react-dropdown";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ImCross } from "react-icons/im"

interface Props {
    href: string
    title: string
}

export const FilmLink = ({ href, title }: Props) => {

    const pathname = usePathname()
    const isActive = pathname.startsWith(href)

    return (
        <div className="flex items-center gap-1">
            <Link className={"ml-4 flex items-center gap-2 whitespace-nowrap underline font-bold" + (isActive ? " text-blue-500" : " text-blue-200")} href={href}>
                {title}
            </Link>
            {isActive ? <Link href={"/"}><ImCross className="text-blue-800" size={14} /></Link> : <ImCross className="text-transparent" size={14} />}
        </div>)
}
