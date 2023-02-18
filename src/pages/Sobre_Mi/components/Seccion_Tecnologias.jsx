import Iconos_Front_End from "./Iconos_Front_End"
import Iconos_Herramientas from "./Iconos_Herramientas"

function Seccion_Tecnologias() {
    return (
        <div className="space-y-2">
            <h1 className="text-lg tracking-wider text-gray-900 dark:text-white">
                Tecnologias con las que trabajo:
            </h1>
            <div className="flex justify-around">
                <Iconos_Front_End />
                <Iconos_Herramientas />
            </div>
        </div>
    )
}

export default Seccion_Tecnologias
