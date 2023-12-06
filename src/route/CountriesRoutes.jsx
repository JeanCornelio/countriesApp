import { Navigate, Route, Routes } from "react-router-dom"
import { CapitalPage, RegionPage, CountriesPage, CountriePage, HomePage } from "../contries"
import { Layout } from "../ui"
import { Page404 } from "../404/Page404"



export const CountriesRoutes = () => {
  return (  
   <Routes>
         <Route path="/home" element={<HomePage/>}></Route>
         <Route path="/404" element={<Page404/>}></Route>
         <Route path="/" element={<Layout/>}>
            <Route path="/countries"  element={<CountriesPage/>}></Route>
            <Route path="/region"  element={<RegionPage/>}></Route>
            <Route path="/capital"  element={<CapitalPage/>}></Route>
            <Route path="/countrie/:countrieCode"  element={<CountriePage/>}></Route>
         </Route>
         <Route path="/*"  element={<Navigate to='/404'/>}></Route> 
   </Routes>
  
 
  )
}
