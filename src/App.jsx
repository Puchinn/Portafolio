import Contenedor from './components/Contenedor'

function App() {
  return (
    <div className='App dark'>
      <div className='flex h-screen items-center justify-center bg-fondoClaro bg-cover bg-no-repeat px-1 py-1 dark:bg-fondoOscuro'>
        <Contenedor />
      </div>
    </div>
  )
}

export default App
