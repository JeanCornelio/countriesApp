import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCountrieCode } from '../services'

export const CountriePage = () => {
  const [countrie, setCountrie] = useState(null)
  const { contrieCode } = useParams()

  useEffect(() => {
    getCountrie()
  }, [contrieCode])

  const getCountrie = async () => {
    const countrie = await getCountrieCode(contrieCode)
    setCountrie(countrie[0])
  }

  console.log(countrie)

  return (
    <section className='mt-20'>
      {countrie !== null && (
        <div className='p-5 grid md:grid-cols-2  gap-4 '>
          <article className='text-cyan-500 bg-cyan-950 rounded-xl p-5'>
            <header>
              <h2 className='text-4xl'>Shield</h2>
            </header>

            <div className='flex items-center justify-center  '>
              <img className='w-80 h-96' src={countrie.coatOfArms.svg} alt='' />
            </div>
          </article>
          <article className='text-cyan-500 bg-cyan-950 rounded-xl p-5 row-span-2'>
            <header className='mb-4'>
              <h2 className='text-4xl'>Information</h2>
            </header>

            <ul className='flex flex-col gap-5'>
              <li className='text-xl'>Countrie: <span className='text-white'> {countrie.name.common}</span></li>
              <li className='text-xl'>Capital: <span className='text-white'> {countrie.capital[0]}</span></li>
              <li className='text-xl'>Code alpha: <span className='text-white'> {countrie.cca3}</span></li>
              <li className='text-xl'>Region: <span className='text-white'> {countrie.region}</span></li>
              <li className='text-xl'>Independent: <span className='text-white'> {countrie.independent === true ? 'Yes' : 'No'}</span></li>
              <li className='text-xl'>Population: <span className='text-white'>{parseInt(countrie.population).toLocaleString()}</span></li>
              <li className='text-xl'>Numerical code: <span className='text-white'> {countrie.ccn3}</span></li>
            </ul>
          </article>
          <article className='text-cyan-500 bg-cyan-950 rounded-xl p-5'>
            <header>
              <h2 className='text-4xl'>Flag</h2>

            </header>
            <div className='flex items-center justify-center '>
              <img className='w-80 h-64' src={countrie.flags.svg} alt='' />
            </div>
          </article>

        </div>
      )}
    </section>
  )
}
