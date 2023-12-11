import { createSlice } from '@reduxjs/toolkit'

export const CountriesSlice = createSlice({
  name: 'countrie',
  initialState: {
    inputValue: '',
    countriesObtained: [],
    regions: [],
    countriesHistory: null,
    showSearch: false,
    showMobileMenu: false
  },
  reducers: {
    setCountriesObtained: (state, { payload }) => {
      // console.log(payload);
      state.countriesObtained = payload
    },
    setInputValue: (state, { payload }) => {
      // console.log(payload);
      state.inputValue = payload
    },
    setRegions: (state, { payload }) => {
      // console.log(payload);
      state.regions = payload
    },
    cleanRegions: (state) => {
      // console.log(payload);
      state.regions = []
    },
    setValueShowSearch: (state, { payload }) => {
      // console.log(payload);
      state.showSearch = payload
    },
    setHistoryCountries: (state, { payload }) => {
      // console.log(payload);
      state.countriesHistory = payload
    },
    setshowMobileMenu: (state, { payload }) => {
      // console.log(payload)
      state.showMobileMenu = payload
    }

  }
})

// Action creators are generated for each case reducer function
export const { setCountriesObtained, setInputValue, setRegions, cleanRegions, setValueShowSearch, setHistoryCountries, setshowMobileMenu } = CountriesSlice.actions
