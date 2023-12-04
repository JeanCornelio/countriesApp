import { configureStore } from '@reduxjs/toolkit'
import { CountriesSlice } from './countries/CountriesSlice'

export const store = configureStore({
  reducer: {
    countries: CountriesSlice.reducer
  }
})
