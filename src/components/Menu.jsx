import BotonMenu from "./BotonMenu"

function Menu() {
    return (
        <>
            <nav className="flex flex-col space-y-5">
                <BotonMenu url="/" />
                <BotonMenu url="proyectos" />
                <BotonMenu url="contacto" />
            </nav>
        </>
    )
}

export default Menu
