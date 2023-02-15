import Menu from "./Menu"
import { Outlet } from "react-router-dom"

function Contenedor() {
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="relative flex min-h-[700px] w-3/4 items-center justify-center bg-white bg-opacity-60 rounded-2xl border backdrop-blur-sm">
                </div>
            </div>
        </>
    )
}

export default Contenedor
