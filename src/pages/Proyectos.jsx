import BtnBack from "../components/BtnBack"
import BtnNext from "../components/BtnNext"
import Proyecto from "../components/Proyecto"
import proyectos from "../info/listaProyectos"
import { useState } from "react"

function Proyectos() {
    const long = proyectos.length - 1
    const [idActual, setId] = useState(0)

    return (
        <>
            <div className="w-5/6">
                <h1 className="py-5 pl-10 text-4xl font-thin text-slate-700">
                    Proyectos:
                </h1>
                <div className="w-full border-y border-gray-300 p-5 py-6">
                    <div className="flex w-full items-center">
                        <BtnBack
                            onClick={setId}
                            idActual={idActual}
                            long={long}
                        />
                        <Proyecto {...proyectos[idActual]} />
                        <BtnNext
                            onClick={setId}
                            idActual={idActual}
                            long={long}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyectos
