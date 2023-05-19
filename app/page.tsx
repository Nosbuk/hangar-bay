export default async function Home() {

  const res = await fetch("https://swapi.dev/api/starships/");
  const starships = res.json()

  return (
    <div className="">
    </div>
  )
}
