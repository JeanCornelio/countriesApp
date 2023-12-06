import { Outlet } from "react-router-dom"
import { HeaderPage } from "../ui"
import { Main } from "./Main"
import { Navbar } from "./navbar"

export const Layout = () => {
  return (
    <div className="flex h-screen ">
          <Navbar/>  
          
        <div className="relative w-full">
          <HeaderPage/>
          <Main>
            <Outlet/>
        </Main>
        </div>
        
    </div>
  )
}
