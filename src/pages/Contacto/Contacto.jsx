import Animacion_paginas from "../../components/Animacion_paginas"
import Formulario from "./Formulario"

function Contacto() {
    return (
        <Animacion_paginas>
            <div className="mx-auto h-full max-w-4xl space-y-3 text-center dark:text-white">
                <h1 className="text-3xl text-gray-800 dark:text-white">
                    ¿Listo para trabajar juntos?
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Si estás interesado en
                    trabajar conmigo o simplemente quieres decir hola, no dudes
                    en ponerte en contacto a través de cualquiera de las
                    opciones a continuación:
                    <a href="sayagoo823@gmail.com">a</a>
                </p>

                <p className="text-2xl text-rose-600">
                    ¡Espero tener noticias tuyas pronto!
                </p>
            </div>
        </Animacion_paginas>
    )
}

export default Contacto
