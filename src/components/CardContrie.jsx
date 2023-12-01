import { Link } from "react-router-dom"


export const CardContrie = (contrie) => {
  return (
    <article key={contrie.name.common} className="bg-cyan-950 text-white p-5 rounded-xl flex items-center gap-10 ">
    <header>
      <img className="h-16 w-32" src={contrie.flags.svg} alt={contrie.name.common} />
    </header>
    <div className="">
      <h2 className="mb-2 text-md">{contrie.name.common}</h2>
      <h3 className="text-md">Population: {contrie.population}</h3>
      <footer className="mt-2">
      <Link to={`/countrie/${contrie.altSpellings[0]}`} className="text-orange-500 text-sm cursor-pointer">
        View...
      </Link>
    </footer>
    </div>
   
  </article>
  )
}
