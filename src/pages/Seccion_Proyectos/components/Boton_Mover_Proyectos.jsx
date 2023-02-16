import Flecha_SVG from "./Flecha_SVG"

function Boton_Mover_Proyectos({ direccion, setProyecto, longitud, indiceActual, setMover }) {
    
    const avanzar = () => {
        setProyecto(indiceActual + 1)
        setMover(true)
        if (indiceActual + 1 > longitud) {
            setProyecto(0)
        }
    }

    const retroceder = () => {
        setProyecto(indiceActual - 1)
        setMover(false)
        if (indiceActual - 1 < 0) {
            setProyecto(longitud)
        }
    }

    return (
        <button
            type="button"
            className="group cursor-pointer px-4 focus:outline-none"
            onClick={() => {direccion === "avanzar" ? avanzar() : retroceder()}}
        >
            <Flecha_SVG direccion={direccion} />
        </button>
    )
}

export default Boton_Mover_Proyectos
