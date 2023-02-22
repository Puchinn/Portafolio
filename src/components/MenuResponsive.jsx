import { NavLink } from "react-router-dom"

function MenuResponsive() {
    return (
        <nav className="sticky top-0 z-10 flex w-full justify-around space-x-1 overflow-hidden rounded-b-2xl bg-white bg-opacity-60 p-2 text-gray-400 backdrop-blur-sm dark:bg-black dark:bg-opacity-30 md:justify-start md:space-x-5 md:px-4 xl:hidden ">
            <NavLink
                className="border-gray-600 px-2 py-2 text-lg dark:[&.active]:border-white [&.active]:border-b [&.active]:text-gray-800 dark:[&.active]:text-white "
                to={"sobremi"}
            >
                Home
            </NavLink>
            <NavLink
                className="border-gray-600 px-4 py-2 text-lg dark:[&.active]:border-white [&.active]:border-b [&.active]:text-gray-800 dark:[&.active]:text-white "
                to={"trabajo"}
            >
                Portafolio
            </NavLink>
            <NavLink
                className="border-gray-600 px-4 py-2 text-lg dark:[&.active]:border-white [&.active]:border-b [&.active]:text-gray-800 dark:[&.active]:text-white "
                to={"contacto"}
            >
                Contacto
            </NavLink>
        </nav>
    )
}

export default MenuResponsive
