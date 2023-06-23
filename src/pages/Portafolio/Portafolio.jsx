import test from '../../assets/test2.jpg'
import { ProyectoCard } from './components/ProyectoCard'

function Portafolio() {
  return (
    <div className='animate-entrada-suave text-slate-700 dark:text-white'>
      <ProyectoCard
        titulo={'Pagina de Peliculas'}
        src={test}
        desc={
          'Este proyecto fue realizado utilizando React, Tailwind CSS y DaisyUI. La información de las películas se obtiene de la API The Movie Database.'
        }
        dmLink={'https://pagina-peliculas-zeta.vercel.app'}
        ghLink={'https://github.com/Puchinn/Pagina-Peliculas'}
      />
    </div>
  )
}

export default Portafolio
