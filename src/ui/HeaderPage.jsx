import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const HeaderPage = () => {
  const [location, setLocation] = useState("");
  let loc = useLocation();

 useEffect(() => {
   const namePath = loc.pathname.split('/')[1]
   const name = namePath.toUpperCase()
  setLocation(name)
 }, [loc])
 
   
  
  return (
    <div className=' bg-cyan-950  rounded-tl-3xl rounded-bl-3xl absolute w-full shadow-xl'>
    <h4 className='text-4xl text-white p-5'>
    {location}
        </h4>
    </div>
  )
}
