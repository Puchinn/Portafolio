import Contenedor from "./components/Contenedor"
import Background from "./components/Background"
import ContextContainer from "./context/darkTheme"
import { motion, AnimatePresence } from "framer-motion"

function App() {
    return (
        <ContextContainer>
            <Background />
            <motion.div
                initial={{ translateX: "100%" }}
                animate={{ translateX: 0 }}
                transition={{ duration: 2.5, ease: "backInOut" }}
            >
                <Contenedor />
            </motion.div>
        </ContextContainer>
    )
}

export default App
