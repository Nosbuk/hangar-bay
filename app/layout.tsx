import '@/app/globals.css'
import SearchInput from '@/app/SearchInput'

export const metadata = {
  title: 'Hangar Bay',
  description: 'Search and look up the best starships in the galaxy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-gray-100 bg-black'>
        <div className="flex flex-col items-center w-full max-w-5xl gap-10 p-6 mx-auto">
          <h1 className='font-bold text-7xl'>Welcome to the
            <span className='text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-red-700 bg-clip-text'>
              &nbsp;Hangar Bay
            </span>
          </h1>
          <h2 className='text-3xl'>
            Search for your favourite Star Wars starships!
          </h2>
          <SearchInput />
          <div className="flex flex-col items-center w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
