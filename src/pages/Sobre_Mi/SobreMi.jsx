import TextoSobreMi from "./components/TextoSobreMi"
import Titulo from "../../components/Titulo"

function SobreMi() {
    return (
        <div className="mx-auto animate-entrada-suave md:max-w-5xl ">
            <Titulo titulo={"¡ Bienvenido !"} />
            <div className="flex items-center  pt-4 lg:px-6 ">
                <div className="border-gray-700  pb-4 dark:border-white md:px-4 lg:border-l-2">
                    <TextoSobreMi />
                </div>
            </div>
        </div>
    )
}

export default SobreMi
