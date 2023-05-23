import "@/app/globals.css"
import { FilmLinks } from "@/components/FilmLinks"
import { SearchInput } from "@/components/SearchInput"
import getAllFilms from "@/service/getAllFilms"
import Link from "next/link"

export const metadata = {
  title: "Hangar Bay",
  description: "Search and look up the best starships in the galaxy",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
  params: { id: string }
}) {

  const films = await getAllFilms()

  if (!films) throw new Error("Films list not found")

  return (
    <html lang="en">
      <body className="text-gray-100 bg-black">
        <header className="flex flex-col items-center w-full mx-auto">
          <Link href="/" className="mt-12 text-5xl font-bold leading-normal text-transparent sm:mt-0 lg:text-7xl bg-gradient-to-r from-blue-500 via-violet-500 to-red-700 bg-clip-text">
            <h1 className="leading-normal">Hangar&nbsp;Bay</h1>
          </Link>
          <nav className="flex flex-col items-center justify-center w-full">
            <SearchInput />
            <FilmLinks films={films} />
          </nav>
        </header>
        <main className="flex flex-col items-center w-full mb-10 border-t-2 border-gray-700">
          {children}
        </main>
        <footer className="fixed bottom-0 flex items-center justify-center w-full text-sm bg-gray-900 border-t-2 border-gray-700">
          Hangar Bay by&nbsp;<span className="font-bold text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-red-700 bg-clip-text">Jakub Matwis</span>&nbsp;|&nbsp;Data from&nbsp;<a target="_blank" rel="external" href="https://swapi.dev/" className="text-yellow-500">SWAPI.dev</a>
        </footer>
      </body>
    </html>
  )
}
