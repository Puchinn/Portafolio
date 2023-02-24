import { Outlet } from "react-router-dom"
import Menu from "./menu/Menu"

function Contenedor() {
    return (
        <div className="flex h-screen w-screen items-center justify-center px-1 py-1">
            <div className="relative h-full w-full overflow-y-scroll rounded-md border bg-white bg-opacity-50  dark:bg-black dark:bg-opacity-60 md:rounded-2xl xl:max-h-[700px] xl:w-5/6 xl:max-w-7xl">
                <Menu />
                <Outlet />
            </div>
        </div>
    )
}

export default Contenedor
