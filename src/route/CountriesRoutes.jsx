import { Navigate, Route, Routes } from "react-router-dom"
import { CapitalPage, HomePage, RegionPage, CountriesPage, CountriePage } from "../contries"
import { Layout } from "../ui"



export const CountriesRoutes = () => {
  return (
    <Layout>
      <Routes>
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/countries"  element={<CountriesPage/>}></Route>
            <Route path="/region"  element={<RegionPage/>}></Route>
            <Route path="/capital"  element={<CapitalPage/>}></Route>
            <Route path="/countrie/:contrieCode"  element={<CountriePage/>}></Route>
            <Route path="/*"  element={<Navigate to='/home'/>}></Route> 
      </Routes>
      
   </Layout>
  )
}
