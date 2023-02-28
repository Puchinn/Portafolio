import FondoDePagina from "./components/FondoDePagina"
import Contenedor from "./components/Contenedor"
import ContextContainer from "./context/darkTheme"

function App() {
    return (
        <ContextContainer>
            <Contenedor />
            <FondoDePagina />
        </ContextContainer>
    )
}

export default App
