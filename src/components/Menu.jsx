import BotonMenu from "./BotonMenu"

function Menu() {
    return (
        <>
            <nav className="flex flex-col space-y-5">
                <BotonMenu url="portafolio" />
                <BotonMenu url="sobremi" />
                <BotonMenu url="proyectos" />
                <BotonMenu url="contacto" />
                <BotonMenu url="estudios" />
            </nav>
        </>
    )
}

export default Menu
