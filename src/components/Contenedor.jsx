import Menu from "./Menu"
import { Outlet } from "react-router-dom"

function Contenedor() {
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="relative flex min-h-[800px] w-5/6 items-center justify-center rounded-sm bg-white bg-opacity-50">
                    <Outlet />
                    <div className="absolute bottom-0 -left-6 h-[95%] w-6 rounded-tl-sm bg-white bg-opacity-20"></div>
                    <div className="absolute -bottom-4 -left-6 h-4 w-[95%] rounded-br-sm rounded-bl-sm bg-white bg-opacity-20"></div>
                </div>
                <Menu />
            </div>
        </>
    )
}

export default Contenedor
