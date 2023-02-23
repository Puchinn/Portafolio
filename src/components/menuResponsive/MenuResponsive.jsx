import MenuLink from "./MenuLink"
import ToggleButton from "./ToggleButton"

function MenuResponsive() {
    return (
        <nav className="sticky top-0 z-10 flex w-full justify-around space-x-1 overflow-hidden rounded-b-2xl bg-white bg-opacity-60 p-2 text-gray-400 backdrop-blur-sm dark:bg-black dark:bg-opacity-30 md:justify-start md:space-x-5 md:px-4 xl:hidden ">
            <MenuLink to={"sobremi"} text="Home" />
            <MenuLink to={"trabajo"} text="Portafolio" />
            <MenuLink to={"contacto"} text="Contacto" />
            <ToggleButton />
        </nav>
    )
}

export default MenuResponsive
