import Contenedor from "./components/Contenedor"
import Background from "./components/Background"
import ContextContainer from "./context/darkTheme"

function App() {
    return (
        <ContextContainer>
            <Contenedor />
            <Background />
        </ContextContainer>
    )
}

export default App
