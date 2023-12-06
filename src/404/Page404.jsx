import { Link } from "react-router-dom"


export const Page404 = () => {

    //TODO: Guardar la ruta de donde vino para mandarlo atras
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="font-bold text-7xl">Oops!</h1>
        <p className="mb-10 text-3xl">Sorry, an unaxpected error has ocurred.</p>
        <p className="mb-5 text-2xl text-gray-400">Not Found</p>
        <Link to="/home" className="text-blue-400">Back Home...</Link>
    </div>
  
  )
}
