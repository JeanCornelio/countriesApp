import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { InputSearch } from '../components/InputSearch'

export const HeaderPage = () => {
  const [location, setLocation] = useState('')
  const [showSerach, setShowSerach] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const namePath = loc.pathname.split('/')[1]
    const name = namePath.toUpperCase()
    setLocation(name)
  }, [loc])

  const getCountrieName = (countrieName) => {
    console.log(countrieName)
  }

  return (
    <header className='relative'>
      <div className=' bg-cyan-950  rounded-tl-3xl rounded-bl-3xl absolute w-full  shadow-xl flex items-center z-20 justify-between'>
        <h4 className='text-4xl text-white p-5'>
          {location}
        </h4>
        <button onClick={() => setShowSerach(!showSerach)} className='mx-5 text-white bg-cyan-900 p-2 rounded-md transition ease-in-out delay-50 border hover:border-cyan-500 hover:text-cyan-500 '><i className='bi bi-search' /></button>
      </div>
      <div className={showSerach ? 'bg-cyan-950  rounded-bl-3xl w-full shadow-xl flex justify-between items-center absolute h-20 z-10 pt-4  mt-16' : 'bg-cyan-950  rounded-tl-3xl rounded-bl-3xl w-full shadow-xl  justify-between items-center absolute h-20 z-10 pt-4 hidden'}>
        <InputSearch getCountrieName={getCountrieName} />
      </div>
    </header>

  )
}
