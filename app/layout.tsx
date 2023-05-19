import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
