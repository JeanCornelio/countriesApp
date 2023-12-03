import { BrowserRouter } from 'react-router-dom'
import { CountriesRoutes } from './route/CountriesRoutes'
import { Provider } from 'react-redux'
import { store } from './store'
export const CountriesApp = () => {
  return (
<Provider store={store}>
    <BrowserRouter>
      <CountriesRoutes />
    </BrowserRouter>
    </Provider>
  )
}
