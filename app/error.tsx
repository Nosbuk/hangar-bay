"use client"

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const info = error.message
    return <div className="flex flex-col items-center gap-3">
        <p className="mt-6 text-xl font-bold text-center text-red-400">{info}</p>
        <Link href="/" className="flex items-center gap-2 underline"><AiFillHome />Home Page</Link>
        <button className="flex items-center gap-2 underline" onClick={reset}><FiRefreshCcw />Try again</button>
    </div>
}