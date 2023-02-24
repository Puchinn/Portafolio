import MenuLink from "./MenuLink"
import ToggleButton from "./ToggleButton"

function Menu() {
    return (
        <nav className="sticky top-0 z-10 flex h-min justify-around space-x-1 rounded-b-2xl bg-white bg-opacity-60 p-2 text-gray-400 backdrop-blur-sm dark:bg-black dark:bg-opacity-70 md:justify-start md:space-x-5 md:px-4 ">
            <MenuLink to={"sobremi"} text="Home" />
            <MenuLink to={"portafolio"} text="Portafolio" />
            <MenuLink to={"contacto"} text="Contacto" />
            <ToggleButton />
        </nav>
    )
}

export default Menu
