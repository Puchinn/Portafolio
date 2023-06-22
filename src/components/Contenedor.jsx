import Menu from './nav/Menu'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

function Contenedor() {
  return (
    <div className='h-full w-full overflow-y-scroll rounded-md border bg-white bg-opacity-50 pb-5 dark:bg-black dark:bg-opacity-60 md:rounded-2xl xl:max-h-[700px] xl:max-w-7xl'>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Contenedor
