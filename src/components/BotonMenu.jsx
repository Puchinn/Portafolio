import { NavLink } from "react-router-dom"

function BotonMenu({ url }) {
    return (
        <>
            <NavLink
                to={url}
                className={`h-24 w-11 rounded-r-sm bg-white opacity-30 transition-[width] ease-in [&.active]:w-14 [&.active]:opacity-50`}
            ></NavLink>
        </>
    )
}

export default BotonMenu
