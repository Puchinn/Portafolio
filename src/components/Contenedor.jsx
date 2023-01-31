import Menu from "./Menu"
import { Outlet } from "react-router-dom"

function Contenedor(){
    return(
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="flex w-full justify-center h-5/6">
                    <div className="p-9 w-5/6 rounded-3xl bg-opacity-50 bg-white">
                        <Outlet />
                    </div>
                    <div className="self-center">
                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contenedor