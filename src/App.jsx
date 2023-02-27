import FondoDePagina from "./components/FondoDePagina"
import Contenedor from "./components/Contenedor"
import ContextContainer from "./context/darkTheme"
import DarkModeButton from "./components/DarkModeButton"

function App() {
    return (
        <ContextContainer>
            <Contenedor />
            <FondoDePagina />
            <DarkModeButton />
        </ContextContainer>
    )
}

export default App
