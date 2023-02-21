import Animacion_paginas from "../../components/Animacion_paginas"
import Formulario from "./Formulario"
import gmail from "../../assets/gmail.svg"
import whatssapp from "../../assets/whatssapp.svg"

function Contacto() {
    return (
        <Animacion_paginas>
            <div className="flex h-full space-y-3 px-10 dark:text-white">
                <div className="h-full text-center">
                    <h1 className="text-3xl text-gray-800 dark:text-white py-3">
                        ¿Listo para trabajar juntos?
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-100">
                        Si estás interesado en trabajar conmigo o simplemente
                        quieres decir hola, no dudes en ponerte en contacto a
                        través de cualquiera de las opciones a continuación:
                    </p>
                    <div className="w-full flex justify-center py-14">
                        <div className="space-y-5">
                        <div className="flex text-start items-center space-x-4">
                            <img className="w-24" src={gmail} alt="" />
                            <div>
                                <h1 className="text-lg">Correo Electronico</h1>
                                <p>sayagoo823@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex text-start items-center space-x-4">
                            <img className="w-24" src={whatssapp} alt="" />
                            <div>
                                <h1 className="text-lg">WhatssApp</h1>
                                <p>+54 3572 616936</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center px-20">
                    <Formulario />
                </div>
            </div>
        </Animacion_paginas>
    )
}

export default Contacto
