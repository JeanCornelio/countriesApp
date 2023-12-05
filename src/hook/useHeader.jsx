import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setHistoryCountries, setInputValue, setValueShowSearch } from '../store/countries/CountriesSlice'
import { getCapitalSearch, getCountriesSearch } from '../store/countries/thunks'

export const useHeader = (initialHistory) => {
  const [location, setLocation] = useState('')
  const [showBtnSearch, setShowBtnSearch] = useState(false)
  const { countriesObtained, inputValue, showSearch } = useSelector((state) => state.countries)
  const [history, setHistory] = useState(initialHistory)
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

  useEffect(() => {
    localStorage.setItem('COUNTRIE_HISTORY', JSON.stringify(history))
    dispatch(setHistoryCountries(history))
  }, [history])

  const handleCountriesHistory = (countrie) => {
    const arrFilter = history.filter(c => c.capital[0] !== countrie.capital[0])

    setHistory([countrie, ...arrFilter])

    // Reset search
    resetStatesSearch()
  }

  useEffect(() => {
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

  const handleSetValueShowSearch = () => {
    dispatch(setValueShowSearch(!showSearch))
  }

  const resetStatesSearch = () => {
    dispatch(setValueShowSearch(false))
    dispatch(getCountriesSearch(null))
    dispatch(setInputValue(''))
    // show btn Search
    handleShowSearchBtn()
  }
  return {
    location,
    countriesObtained,
    showBtnSearch,
    showSearch,
    handleCountriesHistory,
    configNamePage,
    handleSetValueShowSearch,
    history
  }
}
