import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setValueShowSearch } from '../store/countries/CountriesSlice'

import { InputSearch } from '../components'
import { useHeader } from '../hook'

const initialHistory = () => {
  const dataLocaleStorage = JSON.parse(localStorage.getItem('COUNTRIE_HISTORY'))
  const result = dataLocaleStorage !== null ? JSON.parse(localStorage.getItem('COUNTRIE_HISTORY')) : []
  return result
}

export const HeaderPage = () => {
  const dispatch = useDispatch()

  const localstorageHistory = initialHistory()

  const {
    location, countriesObtained,
    showBtnSearch,
    showSearch,
    handleCountriesHistory,
    configNamePage

  } = useHeader(localstorageHistory)

  return (
    <header className='relative'>
      <div className=' bg-cyan-950 sm:rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl absolute w-full  shadow-xl flex items-center z-20 justify-between'>
        <h4 className='text-4xl text-white p-5'>{location}</h4>

        {showBtnSearch &&

          <button
            onClick={() => dispatch(setValueShowSearch(!showSearch))}
            className='mx-5 text-white bg-cyan-900 p-2 rounded-md transition ease-in-out delay-50 border hover:border-cyan-500 hover:text-cyan-500 '
          >
            <i className='bi bi-search' />
          </button>}
      </div>
      <div
        className={`bg-cyan-950  rounded-bl-3xl w-full shadow-xl  justify-between items-center absolute
       ${showSearch ? ' z-10 py-4 pt-10  mt-16' : 'hidden rounded-bl-3xl h-20'}
       `}
      >
        <InputSearch placeholder={configNamePage.searchCapitals ? 'Search capitals...' : 'Serach contries...'} />
        {countriesObtained.length > 0 && (
          <div className='mx-5  bg-cyan-800 border border-cyan-700 cursor-pointer rounded-lg divide-y divide-cyan-700'>
            {countriesObtained.map((countrie) => (
              <Link
                to={`/countrie/${countrie.altSpellings[0]}`}
                onClick={() => handleCountriesHistory(countrie)}
                key={countrie.name.common}
                className='text-white block text-sm px-2 py-2 border-cyan-700'
              >
                {configNamePage.searchCapitals ? countrie.capital : countrie.name.common}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>

  )
}
