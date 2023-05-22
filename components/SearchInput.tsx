"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react"

export const SearchInput = () => {

    const [query, setQuery] = useState("");

    const router = useRouter();

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        const encodedQuery = encodeURI(query);
        router.push(`/search/?q=${encodedQuery}`)
    }

    const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <form onSubmit={handleSearch} className="w-full">
            <input
                type="text"
                className="block w-full max-w-sm p-2 mx-auto my-2 text-center text-gray-100 bg-gray-800 rounded-full placeholder:text-gray-400"
                placeholder="What kind of ship are you looking for?"
                onChange={handleQuery}
                value={query}
            />
        </form>
    )
}
