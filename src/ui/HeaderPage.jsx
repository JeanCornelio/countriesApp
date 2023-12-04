import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { InputSearch } from '../components/InputSearch'
import { useDispatch, useSelector } from 'react-redux'
import { getCapitalSearch, getCountriesSearch } from '../store/countries/thunks'

import { setInputValue, setValueShowSearch } from '../store/countries/CountriesSlice'

export const HeaderPage = () => {
  const [location, setLocation] = useState('')
  const [showBtnSearch, setShowBtnSearch] = useState(false)
  const { countriesObtained, inputValue, showSearch } = useSelector((state) => state.countries)
  const [countriesHistory, setCountriesHistory] = useState([])
  const loc = useLocation()
  const dispatch = useDispatch()
  const configNamePage = setNamePage()

  function setNamePage () {
    const namePath = loc.pathname.split('/')[1]
    const name = namePath.toUpperCase()

    return {
      searchCapitals: name === 'CAPITAL',
      name
    }
  }

  const handleShowSearchBtn = () => {
    if (configNamePage.name === 'CAPITAL' || configNamePage.name === 'COUNTRIES') {
      setShowBtnSearch(true)
    } else {
      setShowBtnSearch(false)
    }
  }

  const handleCountriesHistory = (countrie) => {
    console.log(countrie)
    const arrFilter = countriesHistory.filter(c => c.capital[0] !== countrie.capital[0])

    console.log(arrFilter)
    setCountriesHistory([countrie, ...arrFilter])
    // TODO: Continuar con el guardar de los paises al cual se buscaron las countries

    // Reset search
    resetStatesSearch()
  }

  useEffect(() => {
    console.log(countriesHistory)
    setLocation(configNamePage.name)

    // Reset search
    resetStatesSearch()
  }, [loc])

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      configNamePage.searchCapitals ? dispatch(getCapitalSearch(inputValue)) : dispatch(getCountriesSearch(inputValue))
    }, 500)
    return () => clearTimeout(delayInputTimeoutId)
  }, [inputValue, dispatch])

  const resetStatesSearch = () => {
    dispatch(setValueShowSearch(false))
    dispatch(getCountriesSearch(null))
    dispatch(setInputValue(''))
    // show btn Search
    handleShowSearchBtn()
  }

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
