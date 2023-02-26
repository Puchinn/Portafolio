import svg from "../assets/programando.svg"

function Inicio() {
    return (
        <div className="flex animate-entrada-suave justify-center space-x-12 pt-28">
            <div className="w-96">
                <img src={svg} alt="" />
            </div>
            <div className="flex flex-col justify-center text-center">
                <h1 className="text-6xl font-bold text-[#fa5f49]">
                    ESTEBAN SAYAGO
                </h1>
                <h1 className="py-3 text-4xl font-light text-gray-800 dark:text-white">
                    Desarrollador web Front-End
                </h1>
                <p className="max-w-lg text-gray-700 dark:text-white">
                ¡ Saludos ! Soy Desarrollador Trainer/Junior, con 1 año de experiencia en el desarrollo web. Te invito a continuar revisando mi portafolio y a que conozcas mas sobre mi.
                </p>
            </div>
        </div>
    )
}

export default Inicio
