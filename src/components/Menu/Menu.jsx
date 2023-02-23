import MenuLink from "./MenuLink"

function Menu() {
    return (
        <nav className="hidden flex-col space-y-5 xl:flex ">
            <MenuLink url="sobremi" />
            <MenuLink url="trabajo" />
            <MenuLink url="contacto" />
        </nav>
    )
}

export default Menu
