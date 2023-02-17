import { Outlet } from "react-router-dom"
import Background from "./components/Background"

function App() {
    return (
        <>
            <Outlet />
            <Background />
        </>
    )
}

export default App
