"use client";

import getAllStarships from "@/service/getAllStarships";
import { useSearchParams } from "next/navigation"

export default async function Search() {

    const search = useSearchParams();
    const searchQuery = search ? search.get("q") : null
    const starships = await getAllStarships();
    return <div className="">Here is what we&apos;ve got for ya</div>
}