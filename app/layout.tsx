import '@/app/globals.css'
import { FilmLink } from '@/components/FilmLink'
import { SearchInput } from '@/components/SearchInput'
import getAllFilms from '@/service/getAllFilms'
import { store } from '@/store'
import { setStarships } from '@/store/searchSlice'
import { Starship } from '@/types/Starship'
import Link from 'next/link'

export const metadata = {
  title: 'Hangar Bay',
  description: 'Search and look up the best starships in the galaxy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
  params: { id: string }
}) {
  const res = await fetch("https://swapi.dev/api/starships/")
  const data = await res.json();
  const starships = data.results
  store.dispatch(setStarships(starships))

  const films = await getAllFilms()

  return (
    <html lang="en">
      <body className='text-gray-100 bg-black'>
        <header className='flex flex-col items-center w-full gap-2 p-6 mx-auto'>
          <h1 className='text-6xl font-bold'>Welcome to the
            <Link href="/" className='text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-red-700 bg-clip-text'>
              &nbsp;Hangar&nbsp;Bay
            </Link>
          </h1>
          <h2 className='text-2xl'>
            Search for your favourite Star Wars starships!
          </h2>
          <nav className='flex flex-col items-center w-full'>
            <SearchInput />
            <div className="flex flex-wrap mt-3">
              {
                films
                  .map((film, index) =>
                    <FilmLink key={index} index={index} title={film.title} />)
              }
            </div>
          </nav>
        </header>
        <main className="flex flex-col items-center w-full border-t-2 border-gray-700">
          {children}
        </main>
      </body>
    </html>
  )
}
