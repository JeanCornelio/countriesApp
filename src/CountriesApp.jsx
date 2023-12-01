import { BrowserRouter } from 'react-router-dom'
import { CountriesRoutes } from './route/CountriesRoutes'

export const CountriesApp = () => {
  return (
    <BrowserRouter>
    <CountriesRoutes/>
    </BrowserRouter>

  )
}
