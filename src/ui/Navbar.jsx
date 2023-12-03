import { NavLink } from 'react-router-dom'

const routes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'bi bi-house-fill'
  },
  {
    path: '/countries',
    name: 'Countries',
    icon: 'bi bi-globe-europe-africa'
  },
  {
    path: '/region',
    name: 'Region',
    icon: 'bi bi-map-fill'
  },
  {
    path: '/capital',
    name: 'Capital',
    icon: 'bi bi-map-fill'
  }
]

export const Navbar = () => {
  return (
    <nav className=' w-72 hidden lg:block flex-none p-5 '>
      <header className='text-center flex gap-3 items-center mb-4'>
        <i className='bi bi-globe-europe-africa text-cyan-900 text-3xl' />
        <h3 className='text-cyan-800 font-bold'>CONTRIES</h3>
      </header>
      <hr />
      <ul className=''>
        {routes.map((route) => (
          <li key={route.name} className=' my-5'>
            <NavLink
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
