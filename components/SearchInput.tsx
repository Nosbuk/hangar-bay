"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react"

export const SearchInput = () => {

    const [query, setQuery] = useState("");

    const router = useRouter();

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        const encodedQuery = encodeURI(query);
        router.push(`/search/?query=${encodedQuery}`)
    }

    const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <form onSubmit={handleSearch} className="flex justify-center w-full mb-2 sm:max-w-md">
            <input
                type="text"
                className="w-full p-2 text-center text-gray-100 bg-gray-800 sm:rounded-full placeholder:text-gray-400"
                placeholder="Search for any ship"
                onChange={handleQuery}
                value={query}
            />
        </form>
    )
}
