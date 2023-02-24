import TextoSobreMi from "./components/TextoSobreMi"
import Titulo from "../../components/Titulo"

function SobreMi() {
    return (
        <div className="animate-entrada-suave">
            <Titulo titulo={"¡ Bienvenido !"} />
            <div className="pt-4 lg:px-6 ">
                <div className="border-gray-700  pb-4 dark:border-white md:px-4 lg:border-l-2">
                    <TextoSobreMi />
                </div>
            </div>
        </div>
    )
}

export default SobreMi
