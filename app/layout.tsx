import '@/app/globals.css'
import { SearchInput } from '@/components/SearchInput'
import { store } from '@/store'
import { setStarships } from '@/store/searchSlice'
import { Starship } from '@/types/Starship'

export const metadata = {
  title: 'Hangar Bay',
  description: 'Search and look up the best starships in the galaxy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const res = await fetch("https://swapi.dev/api/starships/")
  const data = await res.json();
  const starships = data.results
  store.dispatch(setStarships(starships))
  return (
    <html lang="en">
      <body className='text-gray-100 bg-black'>
        <header className='flex flex-col items-center w-full max-w-5xl gap-10 p-6 mx-auto'>
          <h1 className='text-6xl font-bold'>Welcome to the
            <span className='text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-red-700 bg-clip-text'>
              &nbsp;Hangar&nbsp;Bay
            </span>
          </h1>
          <h2 className='text-2xl'>
            Search for your favourite Star Wars starships!
          </h2>
          <nav className='sticky top-0 flex justify-center w-full'>
            <SearchInput />
          </nav>
        </header>
        <main className="flex flex-col items-center w-full border-t-2 border-gray-700">
          {children}
        </main>
      </body>
    </html>
  )
}
