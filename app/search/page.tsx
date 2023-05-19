"use client";

import { useSearchParams } from "next/navigation"

export default function SearchPage() {

    const search = useSearchParams();
    const searchQuery = search ? search.get("q") : null

    return <div className="">Here is what we've got for ya</div>
}