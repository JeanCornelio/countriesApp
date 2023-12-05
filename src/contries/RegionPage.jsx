import { useDispatch, useSelector } from 'react-redux'
import { regionList } from '../utils/regions'
import { CardCountrie } from '../components'
import { getRegions } from '../store/countries/thunks'
import { useEffect, useRef, useState } from 'react'
import { cleanRegions } from '../store/countries/CountriesSlice'

const initialSigla = ''

export const RegionPage = () => {
  const [siglaCode, setsiglaCode] = useState(initialSigla)
  const { regions } = useSelector(state => state.countries)
  const dispatch = useDispatch()
  const prevSigla = useRef(initialSigla)

  useEffect(() => {
    const prev = prevSigla.current = siglaCode

    if (prev === siglaCode && siglaCode.length > 0) {
      dispatch(getRegions(siglaCode))
    }

    return () => {
      dispatch(cleanRegions())
    }
  }, [siglaCode, dispatch])

  const handleSiglaRegion = (sigla) => {
    setsiglaCode(sigla)
  }

  return (
    <section>

      <div className='mt-20'>
        <article className='p-5'>
          <h3 className='mb-2 text-2xl text-white'>Select region :</h3>

          {
          regionList.map(region => (
            <button
              onClick={() => handleSiglaRegion(region.sigla)} key={region.sigla}

              className={`me-2 mb-2 p-2 rounded-md transition ease-in-out delay-50 border 
            ${siglaCode === region.sigla ? 'border-cyan-500 text-cyan-500' : 'text-white bg-cyan-900 hover:border-cyan-500 hover:text-cyan-500'}`}
            >
              {region.name}
            </button>
          ))
        }
        </article>
        <article className='p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>

          {
                regions.length > 0 && regions.map((region, index) => (
                  <CardCountrie {...region} key={index} />
                ))
              }
        </article>
      </div>
    </section>
  )
}
