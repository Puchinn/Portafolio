import Contenedor from './components/Contenedor'
import ContextContainer from './context/darkTheme'

function App() {
  return (
    <ContextContainer>
      <Contenedor />
    </ContextContainer>
  )
}

export default App
