import Animacion_paginas from "../components/Animacion_paginas"

function Inicio() {
    return (
        <Animacion_paginas>
            <div className="text-center text-white">
                <p className="text-2xl">Esteban Sayago</p>
                <h1 className="text-7xl">Desarrollador Web</h1>
                <h1 className="text-6xl">Front-End</h1>
                <div className="space-x-5 pt-5">
                    <button className="rounded-sm border border-white bg-slate-600 bg-opacity-30 py-2 px-4 text-white">
                        Ver Portafolio
                    </button>
                </div>
            </div>
        </Animacion_paginas>
    )
}

export default Inicio
