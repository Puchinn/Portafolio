import MenuLink from "./MenuLink"
import { useState } from "react"
import BotonMenu from "./BotonMenu"
import DarkModeButton from "../DarkModeButton"

function Menu() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="sticky top-0 z-10 h-min rounded-b-2xl bg-white bg-opacity-70 p-2 text-gray-400 backdrop-blur-sm dark:bg-black dark:bg-opacity-40 md:flex md:flex-row-reverse md:justify-between">
            <div className="flex justify-between">
                <BotonMenu isActive={isActive} setIsActive={setIsActive} />
                <DarkModeButton />
            </div>
            <nav
                className={`flex flex-col ${
                    isActive ? "block" : "hidden"
                } justify-around space-x-1 md:flex md:flex-row md:justify-start md:space-x-5 md:px-4`}
            >
                <MenuLink to={"/"} text="🏠 Inicio" />
                <MenuLink to={"sobremi"} text="📋 Sobre mi" />
                <MenuLink to={"portafolio"} text="💼 Portafolio" />
                <MenuLink to={"contacto"} text="🚀 Contacto" />
            </nav>
            
        </div>
    )
}

export default Menu
