import Texto_Sobre_Mi from "./components/Texto_Sobre_Mi"
import Titulo_de_Pagina from "../../components/Titulo_de_Pagina"
import Animacion_paginas from "../../components/Animacion_paginas"

function Sobre_Mi() {
    return (
        <Animacion_paginas>
            <div className="mx-auto md:max-w-5xl ">
                <Titulo_de_Pagina titulo={"¡ Bienvenido !"} />
                <div className="flex items-center  pt-4 lg:px-6 ">
                    <div className="border-gray-700  pb-4 dark:border-white md:px-4 lg:border-l-2">
                        <Texto_Sobre_Mi />
                    </div>
                </div>
            </div>
        </Animacion_paginas>
    )
}

export default Sobre_Mi
