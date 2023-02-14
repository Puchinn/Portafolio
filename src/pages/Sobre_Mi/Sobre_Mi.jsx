import Texto_Sobre_Mi from "./components/Texto_Sobre_Mi"
import Foto from "./components/Foto"
import Seccion_Tecnologias from "./components/Seccion_Tecnologias"
import Titulo_de_Pagina from "../../components/Titulo_de_Pagina"

function Sobre_Mi() {
    return (
        <>
            <div className="max-w-5xl">
                <Titulo_de_Pagina titulo={"Sobre Mi"} />
                <div className="flex items-center gap-x-7 border-y border-gray-300 p-5 py-12">
                    <Foto />
                    <div className="space-y-6 border-x-2 border-gray-700 px-4">
                        <Texto_Sobre_Mi />
                        <Seccion_Tecnologias />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre_Mi
