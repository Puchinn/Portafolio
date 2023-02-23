import { NavLink } from "react-router-dom"

function MenuLink({ url }) {
    return (
        <NavLink
            to={url}
            className="h-24 w-11 rounded-r-lg bg-white opacity-30 transition-[width] ease-in dark:bg-black [&.active]:w-14 [&.active]:opacity-50"
        ></NavLink>
    )
}

export default MenuLink
