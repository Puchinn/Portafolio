import { useState } from 'react'
import BotonMenu from './components/BotonMenu'
import DarkModeButton from './components/DarkModeButton'
import MenuLink from './components/MenuLink'

function Menu() {
  const [isActive, setIsActive] = useState(false)
  return (
    <header className='sticky top-0 z-10 h-min rounded-b-2xl bg-white bg-opacity-70 p-2 text-gray-400 backdrop-blur-sm dark:bg-black dark:bg-opacity-40 md:flex md:flex-row-reverse md:justify-between'>
      <div className='flex justify-between'>
        <BotonMenu isActive={isActive} setIsActive={setIsActive} />
        <DarkModeButton />
      </div>
      <nav
        className={`flex flex-col justify-around space-x-1  md:flex md:flex-row md:justify-start md:space-x-5 md:px-4 ${
          isActive ? 'block' : 'hidden'
        }`}
      >
        <MenuLink to={'/'} text='🏠 Inicio' />
        <MenuLink to={'sobremi'} text='📋 Sobre mi' />
        <MenuLink to={'portafolio'} text='💼 Portafolio' />
      </nav>
    </header>
  )
}

export default Menu
