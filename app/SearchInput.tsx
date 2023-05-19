"use client";

import { ChangeEvent, FormEvent, useState } from "react"

export default function SearchInput() {

    const [query, setQuery] = useState("")

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();


    }

    const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                className="flex-1 w-full max-w-sm px-8 py-3 text-center text-gray-100 bg-gray-600 rounded-full sm:px-4 placeholder:text-gray-400"
                placeholder="What kind of ship are you looking for?"
                onChange={handleQuery}
                value={query}
            />
        </form>
    )
}
