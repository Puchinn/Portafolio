import Menu from "./Menu"
import { Outlet } from "react-router-dom"

function Contenedor(){
    return(
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="flex w-full justify-center h-5/6">
                    <div className="p-9 w-5/6 rounded-sm bg-opacity-50 bg-white relative">
                    <div class="h-[95%] w-6 bg-white bottom-0 absolute -left-6 bg-opacity-20 rounded-tl-sm"></div>
                    <div class="h-4 w-[95%] bg-white -bottom-4 absolute -left-6 bg-opacity-20 rounded-br-sm rounded-bl-sm"></div>
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