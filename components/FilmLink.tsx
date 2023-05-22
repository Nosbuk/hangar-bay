"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ImCross } from "react-icons/im"

interface Props {
    index: number
    title: string
}

export const FilmLink = ({ index, title }: Props) => {
    const pathname = usePathname()
    const href = `/film/${index}`
    const isActive = pathname.startsWith(href)
    return (
        <Link className={'mx-4 flex items-center gap-2 underline font-bold' + (isActive ? ' text-blue-500' : ' text-blue-200')} href={href}>
            {title}
            {isActive ? <Link href={'/'}><ImCross className='text-red-500' size={14} /></Link> : <ImCross className='text-transparent' size={14} />}
        </Link>
    )
}
