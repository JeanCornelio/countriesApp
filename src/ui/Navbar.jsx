import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setshowMobileMenu } from '../store/countries/CountriesSlice'

const routes = [
/*   {
    path: '/',
    name: 'Home',
    icon: 'bi bi-house-fill'
  }, */
  {
    path: '/countries',
    name: 'Countries',
    icon: 'bi bi-globe-europe-africa'
  },
  {
    path: '/capital',
    name: 'Capital',
    icon: 'bi bi-map-fill'
  },
  {
    path: '/region',
    name: 'Region',
    icon: 'bi bi-map-fill'
  }

]

export const Navbar = () => {
  const { showMobileMenu } = useSelector(state => state.countries)
  const dispatch = useDispatch()

  const hiddenMenu = () => {
    dispatch(setshowMobileMenu(false))
  }

  return (
    <nav className={`lg:block z-20 absolute w-full h-full  lg:relative  lg:w-72  flex-none p-5  bg-white ${showMobileMenu ? 'block' : 'hidden'}`}>
      <header className='text-center flex gap-3 items-center mb-4 justify-between'>
        <div className='flex gap-3 items-center'>
          <i className='bi bi-globe-europe-africa text-cyan-900 text-4xl' />
          <h3 className='text-cyan-800 font-bold  text-3xl'>CONTRIES</h3>
        </div>

        <button className='lg:hidden text-red-500 text-2xl  block' onClick={hiddenMenu}>
          <i className='bi bi-x-lg' />
        </button>
      </header>
      <hr />
      <ul className=''>
        {routes.map((route) => (
          <li key={route.name} className=' my-5'>
            <NavLink
              onClick={hiddenMenu}
              className={({ isActive }) =>
                isActive
                  ? 'text-cyan-900 p-4 cursor-pointer bg-gray-300 rounded-md block'
                  : ' text-gray-500 p-4 cursor-pointer w-full block hover:text-cyan-900 hover:bg-gray-300 hover:rounded-md'}
              to={route.path}
            >
              <i className={route.icon + ' pr-3 text-sm'} />
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
