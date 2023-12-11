import { Navigate, Route, Routes } from 'react-router-dom'
import { CapitalPage, RegionPage, CountriesPage, CountriePage, HomePage } from '../contries'
import { Layout } from '../ui'
import { Page404 } from '../404/Page404'

export const CountriesRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/404' element={<Page404 />} />
      <Route path='/' element={<Layout />}>
        <Route path='/countries' element={<CountriesPage />} />
        <Route path='/region' element={<RegionPage />} />
        <Route path='/capital' element={<CapitalPage />} />
        <Route path='/countrie/:countrieCode' element={<CountriePage />} />
      </Route>
      <Route path='/*' element={<Navigate to='/404' />} />
    </Routes>

  )
}
