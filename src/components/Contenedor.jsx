import Menu from "./Menu"
import { Outlet } from "react-router-dom"

function Contenedor() {
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="relative flex min-h-[800px] w-5/6 items-center justify-center rounded-2xl bg-white  bg-opacity-20 backdrop-blur-md">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Contenedor
