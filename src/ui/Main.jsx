import { HeaderPage } from "./HeaderPage"

export const Main = ({children}) => {
  return (
    <main className="bg-cyan-900 shadow-2xl rounded-tl-3xl rounded-bl-3xl overflow-auto h-screen " >
       {children}
    </main>
  )
}
