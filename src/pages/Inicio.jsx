import svg from "../assets/programan2.svg"

function Inicio() {
    return (
        <div className="flex animate-entrada-suave flex-col justify-center pt-8 pb-4 sm:pt-14 lg:flex-row lg:items-center lg:space-x-7 lg:pt-28">
            <div className="mx-auto pb-3 lg:mx-0">
                <img className="w-60 sm:w-72 lg:w-96" src={svg} alt="svg programador" width={270} height={195} />
            </div>
            <div className="px-3 text-center">
                <h1 className="text-3xl font-bold text-[#fa5f49] sm:text-5xl">
                    ESTEBAN SAYAGO
                </h1>
                <h1 className="pb-4 text-2xl font-light text-gray-800 dark:text-gray-100 sm:text-4xl">
                    Front-End Dev
                </h1>
                <p className="mx-auto max-w-lg text-lg text-gray-700 dark:text-white">
                    ¡ Saludos ! Soy Desarrollador Trainer/Junior, con 1 año de
                    experiencia en el desarrollo web. Te invito a continuar
                    revisando mi portafolio y a que conozcas mas sobre mi.
                </p>
            </div>
        </div>
    )
}

export default Inicio
