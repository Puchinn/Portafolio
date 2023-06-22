import { NavLink } from 'react-router-dom'

function MenuLink({ to, text }) {
  return (
    <NavLink
      className='border-gray-600 px-2 py-2 text-lg transition-all [&.active]:border-b [&.active]:text-gray-800 dark:[&.active]:border-white dark:[&.active]:text-white '
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default MenuLink
