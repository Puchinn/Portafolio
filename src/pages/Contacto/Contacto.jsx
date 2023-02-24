import Formulario from "./components/Formulario"
import FromasDeContacto from "./components/FromasDeContacto"

function Contacto() {
    return (
        <div className="animate-entrada-suave space-y-3 px-3 dark:text-white xl:flex">
            <div className="flex flex-col justify-center 2xl:px-10">
                <h1 className="py-3 text-3xl text-gray-800 dark:text-white xl:text-center">
                    ¿Listo para trabajar juntos?
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-100 xl:text-center">
                    Si estás interesado en trabajar conmigo o simplemente
                    quieres decir hola, no dudes en ponerte en contacto a través
                    de cualquiera de las opciones a continuación:
                </p>
                <FromasDeContacto />
            </div>
            <div className="w-full xl:px-2">
                <Formulario />
            </div>
        </div>
    )
}

export default Contacto
