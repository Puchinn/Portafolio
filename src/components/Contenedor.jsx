import Menu from "./Menu/Menu"
import { Outlet } from "react-router-dom"
import MenuResponsive from "./menuResponsive/MenuResponsive"

function Contenedor() {
    return (
        <div className="flex h-screen w-screen items-center justify-center px-1 py-1">
            <div className="relative  h-full w-full overflow-y-scroll rounded-md bg-white bg-opacity-50 dark:border-none dark:bg-black dark:bg-opacity-50 md:rounded-2xl xl:grid xl:max-h-[700px] xl:w-5/6 xl:max-w-7xl xl:items-center xl:overflow-hidden">
                <MenuResponsive />
                <Outlet />
            </div>
            <Menu />
        </div>
    )
}

export default Contenedor
