import Texto_Sobre_Mi from "./components/Texto_Sobre_Mi"
import Titulo_de_Pagina from "../../components/Titulo_de_Pagina"
import Animacion_paginas from "../../components/Animacion_paginas"

function Sobre_Mi() {
    return (
        <Animacion_paginas>
            <div className="mx-auto max-w-5xl ">
                <Titulo_de_Pagina titulo={"¡ Bienvenido !"} />
                <div className="flex items-center gap-x-7 px-6 pt-4 pb-12">
                    <div className="border-l-2 border-gray-700 px-4 dark:border-white">
                        <Texto_Sobre_Mi />
                    </div>
                </div>
            </div>
        </Animacion_paginas>
    )
}

export default Sobre_Mi
