import { useSelector } from 'react-redux'
import { CardCountrie } from '../components'

export const CapitalPage = () => {
  // TODO: Mostrar las Ultimas capitales buscadas
  const { countriesHistory } = useSelector(state => state.countries)

  return (
    <section className='mt-20'>
      <h3 className=' p-5 mb-2 text-2xl text-white'>History of countries by capitals:</h3>
      <div className='px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>

        {
      (countriesHistory && countriesHistory.length > 0) &&
        countriesHistory.map(countrie => (
          <CardCountrie {...countrie} key={countrie.name.common} />
        ))

      }
      </div>
    </section>

  )
}
