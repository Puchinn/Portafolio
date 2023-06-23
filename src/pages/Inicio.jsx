function Inicio() {
  return (
    <div className='flex animate-entrada-suave flex-col justify-center pt-8 pb-4 sm:pt-14 lg:flex-row lg:items-center lg:space-x-7'>
      <div className='mx-auto pb-3 lg:mx-0'>
        <img
          className='w-72 rounded-2xl lg:w-96'
          src='https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/059510cb-0909-4863-8c20-b41df5999c20%2F1ea505c9-6955-49d1-9c73-19e4d25acdc0.png'
          alt='svg programador'
          width={270}
          height={195}
        />
      </div>
      <div className='px-3 text-center'>
        <h1 className='text-3xl font-bold text-[#fa5f49] sm:text-5xl'>
          ESTEBAN SAYAGO
        </h1>
        <h1 className='pb-4 text-2xl font-light text-gray-800 dark:text-gray-100 sm:text-4xl'>
          Front-End Dev
        </h1>
        <p className='mx-auto max-w-lg text-lg text-gray-700 dark:text-white'>
          Saludos desde Córdoba, Argentina. Este es mi portafolio personal donde
          te invito a que conozcas acerca de mí, mis objetivos y mis habilidades
          en el mundo del desarrollo web.
        </p>
      </div>
    </div>
  )
}

export default Inicio
