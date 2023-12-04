import { Link } from 'react-router-dom'

export const CardCountrie = (countrie) => {
  console.log(countrie)

  return (
    <article key={countrie.name.common} className='bg-cyan-950 text-white p-5 rounded-xl flex items-center gap-10 '>
      <header>
        <img className='h-16 w-32' src={countrie.flags.svg} alt={countrie.name.common} />
      </header>
      <div className=''>
        <h2 className='mb-2 text-md'>{countrie.name.common}</h2>
        <h3 className='text-md'>Population: {parseInt(countrie.population).toLocaleString()}</h3>
        <footer className='mt-2'>
          <Link to={`/countrie/${countrie.altSpellings[0]}`} className='text-orange-500 text-sm cursor-pointer'>
            View...
          </Link>
        </footer>
      </div>

    </article>
  )
}
