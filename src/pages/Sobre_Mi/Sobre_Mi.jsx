import Texto_Sobre_Mi from "./components/Texto_Sobre_Mi"
import Foto from "./components/Foto"
import Seccion_Tecnologias from "./components/Seccion_Tecnologias"
import Titulo_de_Pagina from "../../components/Titulo_de_Pagina"
import Animacion_paginas from "../../components/Animacion_paginas"

function Sobre_Mi() {
    return (
        <Animacion_paginas>
            <div className="max-w-5xl mx-auto">
                <Titulo_de_Pagina titulo={"Sobre Mi"} />
                <div className="flex items-center gap-x-7 border-y border-gray-300 p-5 py-12">
                    <Foto />
                    <div className="space-y-6 border-x-2 border-gray-700 dark:border-white px-4">
                        <Texto_Sobre_Mi />
                        <Seccion_Tecnologias />
                    </div>
                </div>
            </div>
        </Animacion_paginas>
    )
}

export default Sobre_Mi
