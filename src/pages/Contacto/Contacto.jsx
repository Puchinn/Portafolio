import Animacion_paginas from "../../components/Animacion_paginas"
import Formulario from "./Formulario"
import gmail from "../../assets/gmail.svg"
import whatssapp from "../../assets/whatssapp.svg"

function Contacto() {
    return (
        <Animacion_paginas>
            <div className="space-y-3 px-3 dark:text-white xl:flex">
                <div className="flex flex-col justify-center 2xl:px-10">
                    <h1 className="py-3 text-3xl text-gray-800 dark:text-white xl:text-center">
                        ¿Listo para trabajar juntos?
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-100 xl:text-center">
                        Si estás interesado en trabajar conmigo o simplemente
                        quieres decir hola, no dudes en ponerte en contacto a
                        través de cualquiera de las opciones a continuación:
                    </p>
                    <div className="flex w-full justify-center pt-10 pb-4">
                        <div className="space-y-5">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-16 xl:w-24"
                                    src={gmail}
                                    alt="gmail svg"
                                />
                                <div>
                                    <h1 className="text-lg">
                                        Correo Electronico
                                    </h1>
                                    <p>sayagoo823@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-16 xl:w-24"
                                    src={whatssapp}
                                    alt="whatssapp svg"
                                />
                                <div>
                                    <h1 className="text-lg">WhatssApp</h1>
                                    <p>+54 3572 616936</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:px-2">
                    <Formulario />
                </div>
            </div>
        </Animacion_paginas>
    )
}

export default Contacto
