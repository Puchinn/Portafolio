import Menu from "./Menu"
import { Outlet } from "react-router-dom"

function Contenedor() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="relative flex min-h-[700px] w-3/4 max-w-7xl items-center justify-center overflow-hidden rounded-2xl bg-white bg-opacity-50 py-3 dark:border-none dark:bg-black dark:bg-opacity-50 ">
                <Outlet />
            </div>
            <Menu />
        </div>
    )
}

export default Contenedor
