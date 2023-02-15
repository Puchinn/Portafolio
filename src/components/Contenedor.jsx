import Menu from "./Menu"
import { Outlet } from "react-router-dom"
import BotonDM from "./BotonDM"

function Contenedor() {
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="relative flex min-h-[700px] w-3/4 items-center justify-center rounded-2xl bg-white bg-opacity-50 dark:border-none dark:bg-black dark:bg-opacity-50 ">
                    <Outlet />
                </div>
                <Menu />
                <BotonDM />
            </div>
        </>
    )
}

export default Contenedor
