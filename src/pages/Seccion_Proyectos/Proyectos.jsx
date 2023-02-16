import { useState } from "react"
import Mostrar_Proyecto_Actual from "./components/Mostrar_Proyecto_Actual"
import lista_de_proyectos from "../../info/listaProyectos"
import Titulo_de_Pagina from "../../components/Titulo_de_Pagina"
import Boton_Mover_Proyectos from "./components/Boton_Mover_Proyectos"
import Animacion_paginas from "../../components/Animacion_paginas"

function Proyectos() {
    const longitud_lista = lista_de_proyectos.length - 1
    const [proyecto_Actual, set_proyecto_Actual] = useState(0)
    const [mover,setMover] = useState(true)

    return (
        <Animacion_paginas>
            <div className="mx-auto h-auto w-5/6">
                <Titulo_de_Pagina titulo={"Proyectos"} />
                <div className="flex w-full border-y border-gray-300 p-5 py-6">
                    <Boton_Mover_Proyectos
                        direccion={"retroceder"}
                        setProyecto={set_proyecto_Actual}
                        longitud={longitud_lista}
                        indiceActual={proyecto_Actual}
                        setMover= {setMover}
                    />

                    <Mostrar_Proyecto_Actual
                        {...lista_de_proyectos[proyecto_Actual]} mover={mover}
                    />

                    <Boton_Mover_Proyectos
                        direccion={"avanzar"}
                        setProyecto={set_proyecto_Actual}
                        longitud={longitud_lista}
                        indiceActual={proyecto_Actual}
                        setMover= {setMover}
                    />
                </div>
            </div>
        </Animacion_paginas>
    )
}

export default Proyectos
