import { Starship } from "@/types/Starship";

export default async function Home() {

  const res = await fetch("https://swapi.dev/api/starships/")
  const data = await res.json();
  const starships: Starship[] = data.results
  return (
    <div className="">
      {starships.map((ship) => (
        <div className="">{ship.name}</div>
      ))}
    </div>
  )
}
