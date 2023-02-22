import BotonMenu from "./BotonMenu"

function Menu() {
    return (
        <nav className="hidden flex-col space-y-5 xl:flex ">
            <BotonMenu url="sobremi" />
            <BotonMenu url="trabajo" />
            <BotonMenu url="contacto" />
        </nav>
    )
}

export default Menu
