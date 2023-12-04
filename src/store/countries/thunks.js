import { getForRegion, getCountriesForSearch, getCapitalsForSearch } from '../../services'
import { setCountriesObtained, setRegions } from './CountriesSlice'

export const getCountriesSearch = (name) => {
  return async (dispatch) => {
    if (name === null || name.length < 4) {
      dispatch(setCountriesObtained([]))
    } else {
      const data = await getCountriesForSearch(name)

      dispatch(setCountriesObtained(data))
    }
  }
}

export const getCapitalSearch = (name) => {
  return async (dispatch) => {
    if (name === null || name.length < 4) {
      dispatch(setCountriesObtained([]))
    } else {
      const data = await getCapitalsForSearch(name)

      dispatch(setCountriesObtained(data))
    }
  }
}

export const getRegions = (sigla) => {
  return async (dispatch) => {
    const data = await getForRegion(sigla)
    dispatch(setRegions(data))
  }
}
