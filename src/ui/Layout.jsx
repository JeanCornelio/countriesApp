import { HeaderPage } from "../ui"
import { Main } from "./Main"
import { Navbar } from "./navbar"

export const Layout = ({children}) => {
  return (
    <div className="flex h-screen ">
          <Navbar/>  
          
        <div className="relative w-full">
          <HeaderPage/>
          <Main>
            {children}
        </Main>
        </div>
        
    </div>
  )
}
